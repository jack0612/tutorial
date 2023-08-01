import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'map server';

  lat: number = 45.464198;
  lng: number = 9.190545;

  lat2: number = 45.464198;
  lng2: number = 9.190545;

}
