import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: [ './signup-form.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupFormComponent  {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.signupForm = this.formBuilder.group({
      password: [],
      profile: []
    });
  }

  submit() {
    console.log(this.signupForm.value);
  }

  resetForm() {
    this.signupForm.reset();
  }
}
