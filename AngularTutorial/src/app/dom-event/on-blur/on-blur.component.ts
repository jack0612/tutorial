import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-on-blur',
  templateUrl: './on-blur.component.html',
  styleUrls: ['./on-blur.component.scss']
})
export class OnBlurComponent implements OnInit {

 

  ngOnInit(): void {
  }

  myModel: any;
  form:FormGroup;
  constructor(fb:FormBuilder){
    this.myModel = '123';
    this.form=fb.group({
      'phone':['']
    })
  }
  onBlurMethod(){
   console.log(this.myModel) 
  }
  onBlurPhone(){
    console.log('phone value',this.form.controls.phone.value);
  }
  onChangePhone(){
    console.log('onChangePhone phone value',this.form.controls.phone.value);
  }
}
