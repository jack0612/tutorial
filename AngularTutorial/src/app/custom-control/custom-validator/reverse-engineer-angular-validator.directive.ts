import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
//https://indepth.dev/posts/1319/the-best-way-to-implement-custom-validators
@Directive({
  selector: '[appColorValidator]'
})
export class AngularVlidators {

  static min(min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
        return null;
        // don't validate empty values to allow optional controls
      }
      const value = parseFloat(control.value);
      // Controls with NaN values after parsing should be treated as not having a
      // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min
      return !isNaN(value) && value < min ?
        { 'min': { 'min': min, 'actual': control.value } } : null;
    };

  }

}

function isEmptyInputValue(value){
  return false;
}

 

