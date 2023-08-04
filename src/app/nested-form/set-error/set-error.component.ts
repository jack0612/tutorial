import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { deepCopy } from 'src/app/snap-ship/ship-common/utils/deep-copy.util';
import lodash from 'lodash'
@Component({
  selector: 'app-set-error',
  templateUrl: './set-error.component.html',
  styleUrls: ['./set-error.component.scss']
})
export class SetErrorComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['Sammy', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: [''],
    });
    this.myForm.get('message').setErrors({ 'bad': true });
    const control = this.myForm.get('message');
    const newControl = lodash.cloneDeep(control);

    console.log('1Message  ', newControl);
    console.log('2Message errors', newControl.errors);
    console.log('3form', this.myForm);
    console.log('4Message  ', control);
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message errors', this.myForm.get('message').errors);
    console.log('form', this.myForm);
  }
}
