import { Component, OnInit } from '@angular/core';
import {PersonCreateFormFactory} from '../form-factory/form-factory.service';
import {PersonCreateFormDataProvider} from '../form-action/form-data.service'
import { PersonCreateForm } from '../form-model/PersonCreateForm';
import { PersonCreateFormActions } from '../form-action/form-action.service';
import {PersonParamsConverter} from './params-converter';
import {UrlStore, URL_STORE_CONVERTER} from './url-store'
import { Observable } from 'rxjs';
//https://indepth.dev/posts/1428/angular-forms-reactive-design-patterns
@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss'],
  providers: [
    PersonCreateFormFactory,
    {
      provide: PersonCreateForm,
      useFactory: (factory: PersonCreateFormFactory) => factory.create(),
      deps: [PersonCreateFormFactory]
    },
    PersonCreateFormDataProvider,
    UrlStore,
    { provide: URL_STORE_CONVERTER, useClass: PersonParamsConverter },
    PersonCreateFormActions
  ]
})
export class FormSearchComponent implements OnInit {



  ngOnInit(): void {
  }

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
