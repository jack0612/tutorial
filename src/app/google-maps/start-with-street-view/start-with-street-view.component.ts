import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-start-with-street-view',
  templateUrl: './start-with-street-view.component.html',
  styleUrls: ['./start-with-street-view.component.scss']
})
export class StartWithStreetViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(GoogleMap) map!: GoogleMap;


  ngAfterViewInit() {
    const streetView = this.map.getStreetView();

    streetView.setOptions({
      position: { lat: 38.9938386, lng: -77.2515373 },
      pov: { heading: 70, pitch: -10 },
    });

    streetView.setVisible(true);
  }

}
