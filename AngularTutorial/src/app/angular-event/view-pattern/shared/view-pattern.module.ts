import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { ViewContainerDirective } from './view-container-directive/view-container.directive';
 


@NgModule({
  declarations: [
 
    ViewContainerDirective,
 
  ],
  exports: [
 
    ViewContainerDirective,
 
  ],
  imports: [
    CommonModule
  ]
})
export class ViewPatternModule { }
