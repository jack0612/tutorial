import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from 'src/app/custom-control/custom-validator/password-confirm-validator/confirmed.validator';

@Component({
  selector: 'snap-ship-form-error-test',
  templateUrl: './form-error-test.component.html',
  styleUrls: ['./form-error-test.component.scss']
})
export class FormErrorTestComponent implements OnInit {
  addressForm: FormGroup;
  constructor(private fb:FormBuilder) {
    this.addressForm = this.fb.group({
    
      line1: ['', [Validators.required]],
     
 
    }, { updateOn: 'blur' })
    this._buildForm(fb);
   }

 

  registerForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email1: ['', [Validators.required, Validators.email]],
      email2: ['', [Validators.required, Validators.email]],
      email3: ['', [Validators.required, Validators.email]],
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);
    }
  }


  form: FormGroup;
  
  _buildForm(fb: FormBuilder) {
  
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

  prefetchData(){
    //console.log('111111111111prefetch Data')
  }


}
