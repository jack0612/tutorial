import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//https://simplyaccessible.com/article/accessible-forms-angular/
@Component({
  selector: 'app-a11y-form',
  templateUrl: './a11y-form.component.html',
  styleUrls: ['./a11y-form.component.scss']
})
export class A11yFormComponent implements OnInit {

  contactForm: FormGroup;
  showMessage: boolean;
  submitted: boolean;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.showMessage = false;
    this.submitted = false;

    this.contactForm = this.fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'phoneNumber': [null, Validators.compose([
        Validators.required,
        Validators.pattern(/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g),
        Validators.minLength(7)
      ])],
      'message': [null, Validators.required]
    });
  }

  submitForm(value: any) {
    //console.log(value);

    this.submitted = true;

    if (this.contactForm.valid) {
      this.showMessage = true;

      setTimeout(() => {
        const messageHeading = <HTMLElement>document.querySelector('#message-heading');
        messageHeading.focus();
      }, 100);
    } else {
      setTimeout(() => {
        const errorHeading = <HTMLElement>document.querySelector('#error-heading');
        errorHeading.focus();
      }, 100);
    }
  }


}
