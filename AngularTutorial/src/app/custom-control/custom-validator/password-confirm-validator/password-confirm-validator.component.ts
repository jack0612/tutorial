import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator';

//https://www.itsolutionstuff.com/post/angular-validation-password-and-confirm-passwordexample.html
@Component({
  selector: 'app-password-confirm-validator',
  templateUrl: './password-confirm-validator.component.html',
  styleUrls: ['./password-confirm-validator.component.scss']
})
export class PasswordConfirmValidatorComponent {

  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
  
    this.form = fb.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'confirm_password')
    })
  }
    
  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
  }

}
