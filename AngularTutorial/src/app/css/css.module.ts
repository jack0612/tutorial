import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssComponent } from './css.component';
import { WidthAutoComponent } from './width-auto/width-auto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { StepProgressBarComponent } from './step-progress-bar/step-progress-bar.component';
 
import { StepProgressBarPickupComponent } from './step-progress-bar-pickup/step-progress-bar-pickup.component';
import { NumberCircledComponent } from './number-circled/number-circled.component';
import { StepProgressBar2Component } from './step-progress-bar2/step-progress-bar2.component';
import { GridComponent } from './grid/grid.component';
import { PositionComponent } from './position/position.component';

const directives = [
  CssComponent,
  WidthAutoComponent
]

@NgModule({
  declarations: [
    directives,
    StepProgressBarComponent,
 
    StepProgressBarPickupComponent,
 
    NumberCircledComponent,
 
    StepProgressBar2Component,
 
    GridComponent,
 
    PositionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    directives
  ]
})
export class CssModule { }
