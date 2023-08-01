import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewNoPatternComponent } from './view-no-pattern/view-no-pattern.component';
 
import { ViewPatternDirectiveExampleComponent } from './view-pattern-directive-example/view-pattern-directive-example.component';

import { ViewPatternModule } from '../shared/view-pattern.module';


@NgModule({
  declarations: [
    ViewNoPatternComponent,
 
    ViewPatternDirectiveExampleComponent,
 
  ],
  exports: [
    ViewNoPatternComponent,
 
    ViewPatternDirectiveExampleComponent,
 
  ],
  imports: [
    CommonModule,
    ViewPatternModule
  ]
})
export class ViewPatternExamplesModule { }
