import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormsModule, Validators } from '@angular/forms';

//https://www.digitalocean.com/community/tutorials/angular-custom-form-control


@Component({

  template: `
  <form #form="ngForm">
      <rating-input name="rating" ngModel></rating-input>
  </form>
 
`,
})
export class ColorPickerParentComponent {
  myForm;

  constructor(private formBuilder: FormBuilder) { }
  ngInit() {
    const ValidateMinimumBlue = (control: FormControl) => {
      if (!control.value) {
        return null;
      }
      const { b } = (control.value);
      return b >= 128 ? null : { minimumBlue: true };
    }
    this.myForm = this.formBuilder.group({
      bgColor: [null, [Validators.required, ValidateMinimumBlue]],
      fgColor: [null, Validators.required]
    });
  }


}