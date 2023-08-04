import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { MatCustomControlComponent } from './mat-custom-control/mat-custom-control.component';
import { MatCustomControlParentComponent } from './mat-custom-control-parent/mat-custom-control-parent.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [  MatCustomControlComponent, MatCustomControlParentComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[
    MatCustomControlParentComponent
  ]
})
export class MatCustomControlModule { }
