import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonCreateFormFactory } from '../form-factory/form-factory.service';
import { PersonCreateForm } from '../form-model/PersonCreateForm';
import {PersonCreateFormActions} from './form-action.service';
import {PersonCreateFormDataProvider} from './form-data.service'
@Component({
  selector: 'app-form-action',
  templateUrl: './form-action.component.html',
  styleUrls: ['./form-action.component.scss'],
  providers: [
    PersonCreateFormFactory,
    {
      provide: PersonCreateForm,
      useFactory: (factory: PersonCreateFormFactory) => factory.create(),
      deps: [PersonCreateFormFactory]
    },
    PersonCreateFormDataProvider,
    PersonCreateFormActions
  ]
})
export class FormActionComponent   {

  ageIsGreaterThanTen: Observable<boolean>;
  formIsValid: Observable<boolean>;

  constructor(
    public form: PersonCreateForm,
    public formDataProvider: PersonCreateFormDataProvider,
    public formActions: PersonCreateFormActions
  ) {
    this.ageIsGreaterThanTen = this.form.ageIsGreaterThan(10);
    this.formIsValid = this.form.isValid();
  }

}
