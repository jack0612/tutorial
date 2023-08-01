 
 
import {
  Component,
 
} from '@angular/core';
import {
 
  FormControl,
  FormGroup,
  Validators,
 
} from '@angular/forms';
 
import {MyTel} from '../myTel'

/** @title Form field with custom telephone number input control. */
@Component({
  selector: 'app-mat-custom-control-parent',
  templateUrl: './mat-custom-control-parent.component.html',
})
export class MatCustomControlParentComponent {
  form: FormGroup = new FormGroup({
    tel: new FormControl(new MyTel('', '', ''))
  });

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}

