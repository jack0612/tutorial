import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective } from '@angular/forms';
import { Directive, Injector, Input, ViewChild } from '@angular/core';
@Directive()
export class ControlValueAccessorConnector implements ControlValueAccessor {
  /*
  Selector [formControl]
  Inherited from NgControl
  */
  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;

  @Input()
  formControl: FormControl;

  @Input()
  formControlName: string;
  //get hold of FormControl instance no matter formControl or    formControlName is given. 
  //If formControlName is given, then this.controlContainer.control is the parent FormGroup (or FormArray) instance. 
  get control() {
    return this.formControl || this.controlContainer.control.get(this.formControlName);
  }

  get errors() {
    const control = this.control;
    if (control) {
      return control.touched && control.errors;
    }
    return null;
  }

  constructor(public injector: Injector) {
  }

  get controlContainer() {
    return this.injector.get(ControlContainer);
  }

  registerOnTouched(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
  }
}
