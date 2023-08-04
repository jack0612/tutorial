import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitTestComponent } from './unit-test.component';
import { HighlightDirective } from './directives/highlight.directive';
import { LightswitchComponent } from './components/no-dependency/lightswitch.component';
import { BindingComponent } from './components/binding/binding.component';
import { BrowserModule } from '@angular/platform-browser';
import { AsyncSpyComponent } from './components/async-spy/async-spy.component';
import { TwainService } from './components/async-spy/twain.service';
import { DashboardHeroComponent } from './components/input-output-property/input-output-property.component';

import { HeroService } from './components/model/hero.service';

import { RxjsMarblesUserService } from './rxjs-marbles/rxjs-marbles-user.service';
 import { UnitTestButtonModule} from './harness/button.module'


//https://netbasal.com/simulating-events-in-angular-unit-tests-5482618cd6c6?gi=6f6aaf4d9b3c
//https://whatwebcando.today/clipboard.html
////https://stackoverflow.com/questions/51618154/how-make-access-to-injected-ngcontrol-from-unit-tests
//https://stackoverflow.com/questions/52931778/how-to-unit-test-a-reactive-component-where-ngcontrol-is-decorated-with-self

//https://angular.io/guide/testing-components-scenarios
//https://stackblitz.com/angular/jblvrenngbb?file=src%2Fapp%2Fapp.component.html
//https://stackblitz.com/angular/majdjmbqkry?file=src%2Fapp%2Fapp-initial.component.spec.ts

@NgModule({
  declarations: [UnitTestComponent,
    DashboardHeroComponent,
    HighlightDirective, LightswitchComponent, BindingComponent, AsyncSpyComponent],
  imports: [
    BrowserModule,
    UnitTestButtonModule
  ],
  providers: [
    TwainService,
    HeroService,
    RxjsMarblesUserService,
 

  ],
  exports: [
    UnitTestComponent
  ]
})
export class UnitTestModule { }
