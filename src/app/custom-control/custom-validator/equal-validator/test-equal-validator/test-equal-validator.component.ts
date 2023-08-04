import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface User {
 
  password: string;
  confirmPassword: string;
}
@Component({
  selector: 'app-test-equal-validator',
  templateUrl: './test-equal-validator.component.html',
  styleUrls: ['./test-equal-validator.component.scss']
})
export class TestEqualValidatorComponent   {
  
  form: FormGroup;
  
  constructor(private fb: FormBuilder) {
  
    this.form = fb.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    }, 
      
    )
  }
    
  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
  }

}
