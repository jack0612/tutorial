import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-map-bicycling-layer',
  templateUrl: './my-map-bicycling-layer.component.html',
  styleUrls: ['./my-map-bicycling-layer.component.scss']
})
export class MyMapBicyclingLayerComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 45.424721, lng: -75.695000 }
  zoom = 4;
  constructor() { }

  ngOnInit(): void {
  }

}
