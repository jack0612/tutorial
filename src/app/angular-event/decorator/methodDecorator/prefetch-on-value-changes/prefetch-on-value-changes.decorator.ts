//https://stackblitz.com/edit/angular-ivy-changes-decorator?embed=1&file=src/app/app.component.ts


import { AbstractControl, FormGroup } from '@angular/forms';

const isFunction = fn => typeof fn === "function";

export function PrefetchOnValueChanges(formName: string, formControlName: string): Function {
    return function (targetClass, functionName: string, descriptor): Function {
        const source = descriptor.value;
        //('--descriptor', descriptor)
        //console.log('---targetClass',targetClass)
        let subscription = null;
        let fetched = false;
        let formGroup: FormGroup = targetClass[formName] as FormGroup;
        //console.log('--formGroup', formGroup)
        if (formGroup) {
            let control: AbstractControl = formGroup.get(formControlName);
            //console.log('---------control', control);
            if (control) {
                let eventOnInit = "ngOnInit";
                const originalOnInit = targetClass[eventOnInit];
                targetClass[eventOnInit] = function () {
                    //console.log('---------ngOnInit in Decorator')
                    isFunction(originalOnInit) && originalOnInit.apply(this, null);
                    subscription = control.valueChanges.subscribe(() => {
                        if (!fetched) {
                            source.call(this, null);
                            fetched = true;
                        }
                    });

                }
                let event = "ngOnDestroy";
                const original = targetClass[event];
                targetClass[event] = function () {
                    //console.log('---------ngOnDestroy in Decorator')
                    isFunction(original) && original.apply(this, null);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }
        }//end of if(formGroup)
        return descriptor;
    }
};


