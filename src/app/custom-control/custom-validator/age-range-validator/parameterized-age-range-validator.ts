import { AbstractControl, ValidatorFn } from "@angular/forms";

/*
https://dzone.com/articles/how-to-create-custom-validators-in-angular
An Angular custom validator does not directly take extra input parameters aside from the reference of the control.
 To pass extra parameters, you need to add a custom validator inside a factory function. The factory function will then return a custom validator.

Essentially, to pass parameters to a custom validator you need to follow these steps:
1. Create a factory functionto take the parameters
2. factory functin returns a validator function.
3. validator function returns an validation object or null
*/
export function parameterizedAgeRangeValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
            return { 'ageRange': true };
        }
        return null;
    };
}