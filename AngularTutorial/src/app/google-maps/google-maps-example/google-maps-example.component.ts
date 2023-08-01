import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
declare var google: any;
@Component({
  selector: 'app-google-maps-example',
  templateUrl: './google-maps-example.component.html',
  styleUrls: ['./google-maps-example.component.scss']
})
export class GoogleMapsExampleComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;
  // zoom = 12;
  // center: google.maps.LatLngLiteral = { lat: 45.424721, lng: -75.695000 }
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid',
    maxZoom: 15,
    minZoom: 1,
  };
  markers = [];
  infoContent = '';
  markerCustomizedIcon = this.getMarkerCustomemizedIcon();

  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;
  vertices: google.maps.LatLngLiteral[] = [
    { lat: 13, lng: 13 },
    { lat: -13, lng: 0 },
    { lat: 13, lng: -13 },
  ];
  circleCenter: google.maps.LatLngLiteral = { lat: 10, lng: 15 };
  radius: 3;

  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  imageBounds: google.maps.LatLngBoundsLiteral = {
    east: 10,
    north: 10,
    south: -10,
    west: -10,
  };

  kmlUrl = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      // this.center = {
      //   lat: position.coords.latitude,
      //   lng: position.coords.longitude,
      // };
    });
  }
  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }
  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }
  click(event: google.maps.MouseEvent) {
    console.log(event);
  }
  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()));
  }
  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
         icon: this.markerCustomizedIcon, //customize marker icon
      },
    });
  }
  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.info.open(marker);
  }

  private getMarkerCustomemizedIcon() {
    const iconBase =
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

    const icon = iconBase + "parking_lot_maps.png";

    // library: {
    //   icon: iconBase + "library_maps.png",

    // info: {
    //   icon: iconBase + "info-i_maps.png",


    return icon;
  }
}

