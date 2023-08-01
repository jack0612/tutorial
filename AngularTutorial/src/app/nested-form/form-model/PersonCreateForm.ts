import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { distinctUntilChanged, map, startWith, tap } from "rxjs/operators";
export class PersonCreateForm {
    readonly initialValue;

    constructor(private formGroup: FormGroup) {
        this.initialValue = formGroup.value;
    }

    get asFormGroup() {
        return this.formGroup;
    }

    ageIsGreaterThan(min: number): Observable<boolean> {
        return this.formGroup.valueChanges.pipe(
            map(value => value.age),
            distinctUntilChanged(),
            map(it => it > min),
            startWith(false)
        );
    }

    isValid(): Observable<boolean> {
        return this.formGroup.statusChanges.pipe(
            map(() => this.formGroup.valid),
            startWith(false)
        );
    }

    reset() {
        this.formGroup.reset();
    }

}
