import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Client1Component} from './client-1/client-1.component';
import {MySelectorComponent} from './my-selector/my-selector.component'
import {NgTemplateOutletSelectComponent} from './ng-template-outlet-select.component'
const directives=[
  Client1Component,
  MySelectorComponent,
  NgTemplateOutletSelectComponent
]

@NgModule({
  declarations: [directives],
  imports: [
    CommonModule
  ],
  exports:[directives]
})
export class NgTemplateOutletSelectModule { }
