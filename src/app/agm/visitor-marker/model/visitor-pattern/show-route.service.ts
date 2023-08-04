// <reference types="@types/googlemaps" />

import { Injectable } from "@angular/core";

import { RouteModel } from "./model/route";
import { BaseMap } from "./base.map";

import { CustomMarker } from "./elements/marker-element.interface";
import { RealTimeLocationMarker } from "./elements/real-time-location-marker-element";
import { StartLocationMarker } from "./elements/start-location-marker-element";

import { PointMarker } from "./elements/point-marker-element";
import { MarkerVisitorMouseOver } from "./visitors/marker-visitor-mouse-over";
import { MarkerVisitorMouseOut } from "./visitors/marker-visitor-mouse-out";
import { RouteApiService } from "./route-api.service";
import { MarkerVisitorMouseClick } from "./visitors/marker-visitor-mouse-click";
declare var google: any;
@Injectable()
export class ShowRouteService extends BaseMap {

  markers = [];

  constructor(private routeApiService: RouteApiService) {
    super();
  }



  showRoute(map,route: RouteModel) {
    let bounds = [];
    console.log('showRoute')
    let customMarkers = this.generateMarkerData(route);
    customMarkers.forEach(markerData => {
      this.addMarkerToMap(map, markerData);
      bounds.push(markerData.position);
    });
    this.generateBounds(map, bounds, { left: 120, right: 120 });
    console.log('markers from route', this.markers)
    return this.markers;
  }

  private addMarkerToMap(map, markerData: CustomMarker<any>) {
    let marker = new google.maps.Marker({
      map: map,
      position: markerData.position,
      icon: markerData.icon,
      title: markerData.title
    });

    google.maps.event.addListener(marker, "mouseover", () => {
      this.openInfoWindow(map, marker, markerData.data);
      markerData.accept(new MarkerVisitorMouseOver(this.routeApiService));
    });

    google.maps.event.addListener(marker, "mouseout", () => {
      this.infoWindow.close();
      markerData.accept(new MarkerVisitorMouseOut(this.routeApiService));
    });

    google.maps.event.addListener(marker, "click", () => {
      markerData.accept(new MarkerVisitorMouseClick(this.routeApiService));
    });

    this.markers.push(marker);
  }

  private generateMarkerData(route: RouteModel): CustomMarker<any>[] {
    let customMarkers: CustomMarker<any>[] = [];

    if (route.startLocation) {
      customMarkers.push(new StartLocationMarker(route.startLocation));
    }

    if (route.realTimeLocation) {
      customMarkers.push(new RealTimeLocationMarker(route.realTimeLocation));
    }

    route.points.forEach(point => {
      customMarkers.push(new PointMarker(point));
    });
    return customMarkers;
  }
}
