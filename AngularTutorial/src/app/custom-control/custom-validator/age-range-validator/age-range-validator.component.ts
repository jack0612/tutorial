import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {parameterizedAgeRangeValidator} from './parameterized-age-range-validator'
import { noParameterAgeRangeValidator } from './no-parameter-age-range-validator';
//https://netbasal.com/angular-reactive-forms-tips-and-tricks-bb0c85400b58
@Component({
  selector: 'app-age-range-validator',
  templateUrl: './age-range-validator.component.html',
  styleUrls: ['./age-range-validator.component.scss']
})
export class AgeRangeValidatorComponent implements OnInit {

loginForm : FormGroup;

  min = 10;
  max = 20;
  ngOnInit() {
      this.loginForm = new FormGroup({
          email: new FormControl(null, [Validators.required]),
          password: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
          age: new FormControl(null, [parameterizedAgeRangeValidator(this.min, this.max),noParameterAgeRangeValidator])
      });
  }
}
