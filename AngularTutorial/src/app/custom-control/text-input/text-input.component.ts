import { Component, forwardRef, Input, Self, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl, FormControl } from '@angular/forms';
//https://github.com/profanis/angular-custom-form-elements/blob/custom-form-with-validation/src/app/app.component.ts
@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor {

  @Input() label: string;
  @Input() type: 'text' | 'password' | 'email' = 'text';
  @Input() placeholder: string;
  @Input() control: FormControl;
  field: string;

  id = Math.random();
  errors = {
    minlength: 'Min length error',
    required: 'Field is required',
    email: 'Email is invalid'
  };


  // Function to call when change
  onChange = (value: any) => { }

  writeValue(obj: any): void {
    this.field = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  getErrors(): { type; message; }[] {

    if (!this.control.errors) {
      return;
    }

    return Object.keys(this.control.errors).map(errorType => {
      return {
        type: errorType,
        message: this.errors[errorType]
      };
    }
    );
  }

}