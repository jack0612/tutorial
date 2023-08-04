import { Component, OnInit } from '@angular/core';
import {PersonCreateFormFactory} from './form-factory.service';
import {PersonCreateForm} from '../form-model/PersonCreateForm'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-factory',
  templateUrl: './form-factory.component.html',
  styleUrls: ['./form-factory.component.scss'],
  providers: [
    PersonCreateFormFactory,
    {
      provide: PersonCreateForm,
      useFactory: (factory: PersonCreateFormFactory) => factory.create(),
      deps: [PersonCreateFormFactory]
    }
  ]
})
export class FormFactoryComponent  {
  ageIsGreaterThanTen: Observable<boolean>;
  formIsValid: Observable<boolean>;

  constructor(public form: PersonCreateForm) {
    this.ageIsGreaterThanTen = this.form.ageIsGreaterThan(10);
    this.formIsValid = this.form.isValid();
  }
}
