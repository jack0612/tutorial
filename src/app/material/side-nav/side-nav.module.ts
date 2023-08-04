import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicDrawerComponent } from './basic-drawer/basic-drawer.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [BasicDrawerComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports:[
    BasicDrawerComponent
  ]
})
export class SideNavModule { }
