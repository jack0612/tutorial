import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorPattern } from './behaviour/visitor';
import { DesignPatternComponent } from './design-pattern.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { DecoratorPattern } from './structural/decorator';
import { CommandPattern } from './behaviour/command';

import { BridgePattern } from './structural/bridge';
import { BridgeComponent } from './structural/bridge/bridge.component';
import { WeatherWidgetComponent } from './structural/bridge/weather-widget/weather-widget.component';
import { VelocityWidgetComponent } from './structural/bridge/velocity-widget/velocity-widget.component';
import { WidgetWrapperComponent } from './structural/bridge/widget-wrapper/widget-wrapper.component';

@NgModule({
  declarations: [
    VisitorPattern,
    BridgePattern,
    DesignPatternComponent,
    DecoratorPattern,
    CommandPattern,
 
    BridgeComponent,
    WeatherWidgetComponent,
    VelocityWidgetComponent,
    WidgetWrapperComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    DesignPatternComponent
  ]
})
export class DesignPatternModule { }
