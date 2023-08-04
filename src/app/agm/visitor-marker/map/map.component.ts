import { Component, AfterViewInit, Input, OnChanges, ViewEncapsulation } from "@angular/core";

import { RouteModel } from '../model/visitor-pattern/model/route';
import { MapLoaderService } from '../map-loader.service';
import { ShowRouteService } from '../model/visitor-pattern/show-route.service';

@Component({
  selector: "visitor-marker-map",
  templateUrl: "map.component.html",
  styleUrls: ["map.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class VisitorMarkerMapComponent implements OnChanges, AfterViewInit {
  @Input() route: RouteModel;
  private map;
  constructor(
    //private mapLoaderService: MapLoaderService,
    private showRouteService: ShowRouteService
  ) { }

  ngAfterViewInit() {
    console.log('2222222222222')
    // console.log('000 ',document.getElementById("map"))
    // this.mapLoaderService.loadMap(() => {
    //   this.route && this.showRouteService.showRoute(this.route);
    // });
    // console.log('11', this.route)
    // if (this.route) {
    //   this.showRouteService.showRoute(this.route);
    // }
  }

  ngOnChanges() {
    console.log('33333333333')
    if (this.route && this.map) {
      console.log('44444')
      this.markers = this.showRouteService.showRoute(this.map, this.route);
    }
  }



  lat = 51.678418;
  lng = 7.809007;
  zoom: number = 8;



  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  centerChange(event: Event) {

  }
  mapReady(map) {
    this.map = map;
  }

  markers = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: "A",
      draggable: true
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: "B",
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: "C",
      draggable: true
    }
  ];
}
