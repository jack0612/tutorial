import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { ChildComponent } from './child/child.component';
import {ChildInstanceComponent} from './child-instance.component'


@NgModule({
  declarations: [ ChildComponent,ChildInstanceComponent],
  imports: [
    CommonModule
  ],
 exports:[ChildInstanceComponent]
})
export class ChildInstanceModule { }
