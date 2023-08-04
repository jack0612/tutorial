import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//https://github.com/profanis/angular-custom-form-elements/blob/custom-form-with-validation/src/app/app.component.ts
@Component({
  selector: 'text-input-parent',
  templateUrl: './text-input-parent.component.html',
  styleUrls: ['./text-input-parent.component.scss']
})
export class TextInputParentComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.myForm = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(10)]],
      lastName: [null, [Validators.required, Validators.minLength(10)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }
}


