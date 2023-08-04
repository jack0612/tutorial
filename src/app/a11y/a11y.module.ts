import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yComponent } from './a11y.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';

import { A11yGeneralComponent } from './a11y-general/a11y-general.component'
import {ListComponent, ListItemComponent, RovingTabIndexComponent} from './roving-tabindex/roving-tabindex.component';
import { FocusTrapComponent } from './focus-trap/focus-trap.component';
import { A11yFormComponent } from './a11y-form/a11y-form.component';
import { SemanticsComponent } from './semantics/semantics.component';
import { A11yDescribedbyComponent } from './a11y-describedby/a11y-describedby.component'
const directives = [
  A11yComponent,
  ListItemComponent,
  RovingTabIndexComponent,
  ListComponent,
  A11yGeneralComponent,
  FocusTrapComponent,
  A11yFormComponent,
  A11yDescribedbyComponent,
  SemanticsComponent
]
@NgModule({
  declarations: [directives],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    directives
  ]
})
export class JackA11yModule { }
