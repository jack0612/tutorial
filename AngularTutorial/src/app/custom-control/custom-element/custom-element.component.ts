 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//https://ritchiejacobs.be/angular-custom-form-component
//https://medium.com/@joaqcid/angular-custom-form-controls-series-3d56884bdb99
//https://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html
@Component({
  selector:'custom-element',
  templateUrl: './custom-element.component.html',
  styleUrls: [ './custom-element.component.scss' ]
})
export class CustomElementComponent implements OnInit {
  customInputForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.customInputForm = this.formBuilder.group(
      {
        email: [''],
        fullname: ['Bill Gates'],
        phone: [{
          value: '0497 88 88 88',
          disabled: true
        }]
      },
      // Uncomment to test `registerOnTouched`
      // { validator: { updateOn: 'blur' } }
    );
  }
}