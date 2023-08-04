import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { NestedFormComponent } from './nested-form.component';
import { NestedFormArrayComponent } from './nested-form-array/nested-form-array.component';
import { NestedFormArray2Component } from './nested-form-array2/nested-form-array2.component';
import { NestedFormGroupComponent } from './nested-form-group/nested-form-group.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatchFormArrayComponent } from './patch-form-array/patch-form-array.component';
import { FormModelComponent } from './form-model/form-model.component';
import { FormFactoryComponent } from './form-factory/form-factory.component';
import { FormActionComponent } from './form-action/form-action.component';
import { FormSearchComponent } from './form-search/form-search.component';
import {ClickEventDirective} from './form-search/click-event.directive';
import { SetErrorComponent } from './set-error/set-error.component'
export const routes: Routes=  [
  {
    path: 'NestedForm',
    component: NestedFormComponent,
    children: [
      { path: 'setError',component: SetErrorComponent },
      { path: 'NestedFormArray',component: NestedFormArrayComponent },
      { path: 'NestedFormArray2', component: NestedFormArray2Component  },
      { path: 'NestedFormGroup',component: NestedFormGroupComponent },
      { path: 'PatchFormArray',component: PatchFormArrayComponent },
      { path: 'FormSearch',component: FormSearchComponent },
 
  ]
  }
];
@NgModule({
  declarations: [
    NestedFormArrayComponent,
    NestedFormArray2Component,
    NestedFormGroupComponent,
    PatchFormArrayComponent,
    FormModelComponent,
    FormFactoryComponent,
    FormActionComponent,
    FormSearchComponent,
    ClickEventDirective,
    SetErrorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class NestedFormModule { }
