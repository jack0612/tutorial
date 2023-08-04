import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//https://netbasal.com/three-ways-to-dynamically-alter-your-form-validation-in-angular-e5fd15f1e946
//https://functionalhuman.medium.com/getting-naked-with-angular-reactive-forms-6bc63e0a7c8d
@Component({
  selector: 'app-three-ways-to-alter-validator',
  templateUrl: './three-ways-to-alter-validator.component.html',
  styleUrls: ['./three-ways-to-alter-validator.component.scss']
})
export class ThreeWaysToAlterValidatorComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      optionA: new FormControl(false),
      optionB: new FormControl(false)
    });
    //way1: by addControl()
    this.optionB.valueChanges.subscribe(checked => {
      if (checked) {
        const validators = [Validators.required, Validators.minLength(5)];
        this.form.addControl('optionBExtra', new FormControl('', validators));
      } else {
        this.optionBExtra.setErrors(null);
        this.form.removeControl('optionBExtra');
      }
      //We also call the form’s updateValueAndValidity() method, as we need to recalculate the value and validation status of the form.
      this.form.updateValueAndValidity();
    });
  }
  get optionB() {
    return this.form.get('optionB') as FormControl;
  }

  get optionBExtra() {
    return this.form.get('optionBExtra') as FormControl;
  }
}
/*way2:setValidators()
  ngOnInit() {
    this.form = new FormGroup({
      optionA: new FormControl(false),
      optionB: new FormControl(false),
      optionBExtra: new FormControl('')
    });

    this.optionB.valueChanges.subscribe(checked => {
      if (checked) {
        this.optionBExtra.setValidators([Validators.required, Validators.minLength(5)]);
      } else {
        this.optionBExtra.setValidators(null);
      }
      this.optionBExtra.updateValueAndValidity();
    });
  }
*/
/*way3:Disable the Control
ngOnInit() {
    this.form = new FormGroup({
      optionA: new FormControl(false),
      optionB: new FormControl(false),
      optionBExtra: new FormControl({ disabled: true, value: '' }, 
                   [Validators.required, Validators.minLength(5)])
    });

    this.optionB.valueChanges.subscribe(checked => {
      checked ? this.optionBExtra.enable() : this.optionBExtra.disable()
    });
  }
  //If you need the complete form value including the disabled controls, you can use the form’s getRawValue() method.
*/