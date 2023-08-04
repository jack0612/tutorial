import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import {PersonCreateForm} from './PersonCreateForm'
//https://indepth.dev/posts/1428/angular-forms-reactive-design-patterns
@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.scss']
})
export class FormModelComponent  {
  form: PersonCreateForm;
  ageIsGreaterThanTen: Observable<boolean>;
  formIsValid: Observable<boolean>;

  constructor(formBuilder: FormBuilder) {
    this.form = createFormUsing(formBuilder);

    this.ageIsGreaterThanTen = this.form.ageIsGreaterThan(10);
    this.formIsValid = this.form.isValid();
  }
}

function createFormUsing(formBuilder: FormBuilder): PersonCreateForm {
  const formGroup = formBuilder.group({
    name: "",
    age: ""
  });

  return new PersonCreateForm(formGroup);

}
