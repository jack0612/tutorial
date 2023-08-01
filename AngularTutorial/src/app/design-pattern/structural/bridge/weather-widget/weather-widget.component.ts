import { Component, OnInit } from '@angular/core';
import {IWidget} from '../widget.interface';
@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  providers:[
    {provide:WeatherWidgetComponent, useClass:WeatherWidgetComponent}
  ]
})
export class WeatherWidgetComponent implements OnInit,IWidget {

  constructor() { }

  ngOnInit(): void {
  }

  load(){

  }
  refresh(){

  }

}
