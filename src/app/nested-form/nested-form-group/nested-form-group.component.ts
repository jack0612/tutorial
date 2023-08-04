import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form-group',
  templateUrl: './nested-form-group.component.html',
  styleUrls: ['./nested-form-group.component.scss']
})
//formGroup of FormGroup of formControl
//--form--      --------child--------
export class NestedFormGroupComponent implements OnInit {
  myForm: FormGroup;
  email: AbstractControl;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.maxLength(500)]],
      child: this.fb.group({
        id: ['', [Validators.required]],
        name: ['']
      })
    });
  }

  public send() {
    alert(this.myForm.get('child').get('id').valid)
  }

}
