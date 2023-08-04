
import { Component, OnInit } from '@angular/core';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';
import { IWidget } from '../widget.interface'
@Component({
  selector: 'app-velocity-widget',
  templateUrl: './velocity-widget.component.html',
  styleUrls: ['./velocity-widget.component.scss'],
  providers: [
    { provide: WeatherWidgetComponent, useClass: VelocityWidgetComponent }
  ]
})
export class VelocityWidgetComponent implements OnInit, IWidget {

  constructor() { }

  ngOnInit(): void {
  }
  load() {

  }
  refresh() {

  }
}
