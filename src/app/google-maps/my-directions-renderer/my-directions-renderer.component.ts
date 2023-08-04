import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MapDirectionsService } from '@angular/google-maps';

declare var google: any;
@Component({
  selector: 'app-my-directions-renderer',
  templateUrl: './my-directions-renderer.component.html',
  styleUrls: ['./my-directions-renderer.component.scss']
})
export class MyDirectionsRendererComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };
  zoom = 12;

  readonly directionsResults$: Observable<google.maps.DirectionsResult | undefined>;

  constructor(mapDirectionsService: MapDirectionsService) {
    const request: google.maps.DirectionsRequest = {
      destination: { lat: 12, lng: 4 },
      origin: { lat: 14, lng: 8 },
      travelMode: google.maps.TravelMode.DRIVING
    };
    this.directionsResults$ = mapDirectionsService.route(request).pipe(map(response => response.result));
  }

  ngOnInit(): void {
  }
  click(event: google.maps.MouseEvent) {
    console.log(event);
  }

}
