import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'snap-ship-prefetch-test',
  templateUrl: './prefetch-test.component.html'
})
export class PrefetchTestComponent implements OnInit {
 
  constructor(private fb:FormBuilder) {
    
   }
 
  registerForm: FormGroup|null=null;
  submitted = false;
  ngOnInit() {
    this.registerForm = this.fb.group({
 
      email1: ['', [Validators.required, Validators.email]],
      email2: ['', [Validators.required, Validators.email]],
       
    });
  }

  get registerFormControl() {
    return this.registerForm&&this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm&&this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);
    }
  }


   
  prefetchOnHover(){
    //console.log('111111111111 prefetchOnHover')
  }

  prefetchOnValueChanges(){
    //console.log('222222 prefetchOnValueChanges')
  }
}
