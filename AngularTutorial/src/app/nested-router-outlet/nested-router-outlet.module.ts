import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedRouterOutletParentComponent } from './parent/parent.component';
import {Tab1Component} from './tab1/tab1.component'
import {Tab2Component} from './tab2/tab2.component'
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//https://medium.com/dev-genius/the-art-of-nested-router-outlets-in-angular-dafb38245a30
export const routes: Routes=  [
  {
    path: 'NestedRouterOutlet',
    component: NestedRouterOutletParentComponent,
    children: [
 
      {
         path: 'first',
         component: Tab1Component
      },
      {
         path: 'second',
         component: Tab2Component
      }
  ]
  }
];
@NgModule({
  declarations: [NestedRouterOutletParentComponent,
    Tab1Component,
    Tab2Component
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class NestedRouterOutletModule { }
