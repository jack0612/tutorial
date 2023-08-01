import { Component, Injectable, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { distinctUntilChanged, map, startWith, tap } from "rxjs/operators";
import {PersonCreateForm} from '../form-model/PersonCreateForm'
@Injectable()
export class PersonCreateFormFactory {
  constructor(private formBuilder: FormBuilder) {}

  create(): PersonCreateForm {
    const formGroup = this.createFormGroup();
    return new PersonCreateForm(formGroup);
  }

  private createFormGroup() {
    return this.formBuilder.group({
      name: [""],
      age: [""],
      country: [""],
    });
  }
}

 
