// https://scotch.io/tutorials/how-to-implement-a-custom-validator-directive-confirm-password-in-angular-2
//https://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html
import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
        //registers a custom validator directive
    ]
})
export class EqualValidator implements Validator {
    constructor(
        @Attribute('validateEqual') public validateEqual: string,
        @Attribute('reverse') public reverse: string) {
    }

    private get isReverse() {
        if (!this.reverse) return false;
        return this.reverse === 'true' ? true : false;
    }

    validate(control: AbstractControl): { [key: string]: any } {
        // self value
        let v = control.value;

        console.log('111111 EqualValidator.control', control)

        // control vlaue
        let e = control.root.get(this.validateEqual);

        console.log({ e: e.value, v })

        // value not equal
        if (e && v !== e.value && !this.isReverse) {
            console.log('00000 validate')
            return {
                notEqual: true
            }
        }

        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            if (e.errors && e.errors['notEqual']) {
                delete e.errors['notEqual'];
            }
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
            console.log('111111111 validate')
        }

        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({ notEqual: true });
            console.log('2222222 validate')
        }
        console.log('33333 validate')
        return null;
    }
}