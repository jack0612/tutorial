import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTypescriptComponent } from './my-typescript.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { ChangeTypeComponent } from './change-type/change-type.component';



@NgModule({
  declarations: [MyTypescriptComponent, ChangeTypeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports:[
    MyTypescriptComponent
  ]
})
export class MyTypescriptModule { }
