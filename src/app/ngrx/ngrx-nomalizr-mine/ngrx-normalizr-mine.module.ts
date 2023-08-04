import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { normalizrReducerMine } from './reducer/ngrx-normalizr-mine.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    StoreModule.forFeature('ngrxNormalizrMine', { ngrxNormalizr: normalizrReducerMine }),
    EffectsModule.forFeature([]),
  ],
  exports: [

  ]
})
export class NgrxNormalizrMineModule { }
