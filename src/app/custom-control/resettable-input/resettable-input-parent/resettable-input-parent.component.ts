import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resettable-input-parent',
  templateUrl: './resettable-input-parent.component.html',
  styleUrls: ['./resettable-input-parent.component.scss']
})
export class ResettableInputParentComponent {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.formGroup = this.formBuilder.group({
      firstName: ['Kern', Validators.required],
      food: ['pizza-1', Validators.required],
      lastName: ['Zhao'],
      seasons: ['Winter']
    });

    this.formGroup.controls.lastName.disable();
  }


}
