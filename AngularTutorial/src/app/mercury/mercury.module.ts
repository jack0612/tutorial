import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MercuryComponent } from './mercury.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import {  DsInputComponent } from './ds-input/ds-input.component';
import { DsDropdownComponent } from './ds-dropdown/ds-dropdown.component'


const components = [
  MercuryComponent, DsInputComponent, DsDropdownComponent
]


@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [components]
})
export class MercuryModule { }
