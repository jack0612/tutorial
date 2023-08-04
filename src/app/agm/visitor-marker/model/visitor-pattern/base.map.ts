// <reference types="@types/googlemaps" />

import { MapOption } from "./map.option";

declare var google: any;
export class BaseMap {
  //protected map;
  protected mapOption: MapOption;
  protected infoWindow;

  protected serviceIsLoaded = false;

  protected initBaseMap(selector: HTMLElement) {
    // console.log('------------initBaseMap')
    // this.map = new google.maps.Map(selector, this.mapOption.option);
    // this.infoWindow = new google.maps.InfoWindow({
    //   disableAutoPan: true,
    //   content: "Loading...",
    // });
  }

  // Sets the map on all markers in the array.
  setMapOnAll(markers: any[], map): void {
    markers = (markers || []).filter(Boolean);
    for (var i = 0; i < markers.length; i++) {
      try {
        let marker = markers[i];
        if (marker) {
          marker.setMap(map);
          google.maps.event.clearInstanceListeners(marker);
        }
      } catch (e) {
        console.log(e);
      }
    }
    if (!map) {
      markers = [];
    }
  }

  protected generateBounds(
    map,
    locations,
    padding?
  ) {
    if (locations && locations.length > 0) {
      let bounds = new google.maps.LatLngBounds();

      for (let location of locations) {
        bounds.extend(location);
      }

      //if only one marker, not zoom in too deep
      if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
        var extendPoint = new google.maps.LatLng(
          bounds.getNorthEast().lat() + 0.01,
          bounds.getNorthEast().lng() + 0.01
        );
        bounds.extend(extendPoint);
      }
      try {
        if (padding) {
          map.fitBounds(bounds, padding);
        } else {
          map.fitBounds(bounds);
        }
      } catch (error) {
        console.log(error);
      }
      google.maps.event.addListenerOnce(map, "tilesloaded", () => {
        map.panTo(map.getCenter());
      });
    }
  }

  protected resizeMap(map) {
    try {
      google.maps.event.trigger(map, "resize");
    } catch (error) {
      console.log(error);
    }
  }

  protected openInfoWindow(map, marker, title: string) {
    this.infoWindow.close();
    this.infoWindow.setContent(title);
    this.infoWindow.open(map, marker);
  }
}
