import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
 
//https://www.digitalocean.com/community/tutorials/angular-custom-form-control


@Component({
  
  template: `
  <form #form="ngForm">
      <rating-input name="rating" ngModel></rating-input>
  </form>
 
`,
})
export class RatingInputParentComponent {

}