import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { RxjsComponent } from './rxjs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TakeComponent } from './take/take.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';
import { RetryWhenComponent } from './retry-when/retry-when.component';
import { CustomOperatorComponent } from './custom-operator/custom-operator.component';
import { RetryWhen2Component } from './retry-when2/retry-when2.component';
import { ThrowErrorComponent } from './throw-error/throw-error.component';



@NgModule({
  declarations: [ConcatMapComponent, RxjsComponent, SwitchMapComponent, MergeMapComponent, 
    ShareReplayComponent, TakeComponent, WithLatestFromComponent, RetryWhenComponent, CustomOperatorComponent, RetryWhen2Component, ThrowErrorComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports:[RxjsComponent]
})
export class RxjsModule { }
