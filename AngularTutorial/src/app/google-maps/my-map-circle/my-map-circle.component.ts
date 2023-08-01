import { Component, OnInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-my-map-circle',
  templateUrl: './my-map-circle.component.html',
  styleUrls: ['./my-map-circle.component.scss']
})
export class MyMapCircleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;

  circleCenter: google.maps.LatLngLiteral = {lat: 10, lng: 15};
  radius = 3;
}
