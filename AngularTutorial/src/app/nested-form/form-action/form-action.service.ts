import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { PersonCreateForm } from "../form-model/PersonCreateForm";
import { PersonSearchCriteria } from "../form-search/params-converter";
import { UrlStore } from "../form-search/url-store";

@Injectable()
export class PersonCreateFormActions {
  validateButtonClicked = new Subject<void>();
  resetButtonClicked = new Subject<void>();
  searchButtonClicked = new Subject<void>();
  
  constructor(private form: PersonCreateForm,
    private urlStore: UrlStore<PersonSearchCriteria>) {
    this.handleValidateButtonClick();
    this.handleResetButtonClick();
    this.handleSearchButtonClick();
  }

  private handleValidateButtonClick() {
    this.validateButtonClicked
        .subscribe(() => alert('The form is validated!'))    
  }

  private handleResetButtonClick() {
    this.resetButtonClicked
        .subscribe(() => this.form.reset())    
  }

  private handleSearchButtonClick() {
    const searchAction = this.searchButtonClicked.pipe(
      map(() => this.form.asFormGroup.value)
    );
    this.urlStore.setSource(searchAction);
  }
  
}