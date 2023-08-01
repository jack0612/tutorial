import { Component, OnInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-my-map-marker-cluster',
  templateUrl: './my-map-marker-cluster.component.html',
  styleUrls: ['./my-map-marker-cluster.component.scss']
})

export class MyMapMarkerClusterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 4;
  markerPositions: google.maps.LatLngLiteral[] = [];
  markerClustererImagePath =
    'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }
}
