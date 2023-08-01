import { Component, OnInit } from '@angular/core';
import { mapFitBounds } from './mapFitBounds.util';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class MyGoogleMapsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //mapFitBounds(document.getElementById("map-canvas"), google);
  }

}
