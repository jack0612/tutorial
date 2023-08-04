import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CdkComponent } from './cdk.component';
import { CdkPortalComponent, HeaderComponent } from './cdk-portal/cdk-portal.component';
import { MaterialModule } from '../material/material.module';
import { CdkOverlayPopupComponent } from './cdk-overlay-popup/cdk-overlay-popup.component';
import { InfoButtonComponent } from './cdk-overlay-popup/info-button/info-button.component';
import { InfoComponent } from './cdk-overlay-popup/info/info.component';
import { InfoPopupDirective } from './cdk-overlay-popup/info-popup.directive';
import { CdkFocusInitialComponent } from './cdk-focus-initial/cdk-focus-initial.component';

const directives = [
  CdkComponent,
  CdkPortalComponent,
  HeaderComponent,
  CdkOverlayPopupComponent,
]

@NgModule({
  declarations: [
    directives,
    InfoButtonComponent,
    InfoComponent,
    InfoPopupDirective,
    CdkFocusInitialComponent,
  
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    directives
  ],
  entryComponents: [
    HeaderComponent
  ]
})
export class CdkModule { }
