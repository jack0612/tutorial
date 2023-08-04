import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//https://medium.com/@joaqcid/angular-custom-form-controls-series-3d56884bdb99
@Component({
  selector: 'reusable-form-control',
  templateUrl: './reusable-form-control.component.html',
})
export class ReusableFormControlComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    address: new FormControl('', [Validators.required, Validators.minLength(10)]),
  })
}