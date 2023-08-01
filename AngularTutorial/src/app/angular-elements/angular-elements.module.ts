import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularElementsComponent } from './angular-elements.component';
import { AwesomeElementComponent } from './awesome-element/awesome-element.component';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [AngularElementsComponent, AwesomeElementComponent],
  imports: [BrowserModule],
  entryComponents: [AwesomeElementComponent], // (1)
  //bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // (4)
})
export class AngularElementsModule {
  constructor(public injector: Injector) {
    const el = createCustomElement(AwesomeElementComponent, { injector }); //(2)
    customElements.define('my-component', el); //(3)
  }

}
