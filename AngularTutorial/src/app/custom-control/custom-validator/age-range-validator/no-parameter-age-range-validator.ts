import { AbstractControl } from "@angular/forms";
/*
The custom validator returns either of the following:
1. If the validation fails, it returns an object, which contains a key-value pair. Key is the name of the error and the value is always Booleantrue.
2. If the validation does not fail, it returns null
*/
export function noParameterAgeRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
        return { 'ageRange': true };
    }
    return null;
}