import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxBasicModule } from './ngrx-basic/ngrx-basic.module';
import { NgrxComponent } from './ngrx.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { MormalizrComponent } from './mormalizr/mormalizr.component';
import { NgrxNormalizrMineComponent } from './ngrx-nomalizr-mine/ngrx-normalizr-mine.component';
import { NgrxNormalizrMineModule } from './ngrx-nomalizr-mine/ngrx-normalizr-mine.module';
import { NgrxEntityModule } from './ngrx-entity/ngrx-entity.module'

@NgModule({
  declarations: [NgrxComponent, MormalizrComponent, NgrxNormalizrMineComponent],
  imports: [
    CommonModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgrxBasicModule,
    NgrxNormalizrMineModule,
    NgrxEntityModule
  ],
  exports: [

    NgrxBasicModule,
    NgrxComponent,
    MormalizrComponent,
    NgrxNormalizrMineComponent
  ]
})
export class NgrxModule { }
