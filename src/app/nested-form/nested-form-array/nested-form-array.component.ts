import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-nested-form-array',
  templateUrl: './nested-form-array.component.html',
  styleUrls: ['./nested-form-array.component.scss']
})

//formGroup of formArray  of formControl
//--form--      -------cities----------
export class NestedFormArrayComponent {
  form:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
 

   this.form = this.fb.group({
    cities: this.fb.array([
      new FormControl('SF'),
      new FormControl('NY'),
    ]),
  });

    console.log('=====this.form',this.form.get('cities')['controls'])
  }

  get cities(): FormArray {
    return this.form.get('cities') as FormArray;
  }

  addCity() {
    this.cities.push(new FormControl());
  }

  onSubmit() {
    console.log(this.cities.value);  // ['SF', 'NY']
    console.log(this.form.value);    // { cities: ['SF', 'NY'] }
  }

  setPreset() {
    this.cities.patchValue(['LA', 'MTV']);
  }

}
