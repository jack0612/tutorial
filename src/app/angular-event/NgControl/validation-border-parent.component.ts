 

import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector:'validation-border',
  template: `
  <h1> Reactive Forms </h1>
  <input [formControl]="formControl" appValidationBorder>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ValidationBorderParentComponent {
  formControl = new FormControl('', Validators.required);
}
