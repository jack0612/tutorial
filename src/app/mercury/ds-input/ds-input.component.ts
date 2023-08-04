import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ds-input',
  templateUrl: './ds-input.component.html',
  styleUrls: ['./ds-input.component.scss']
})
export class DsInputComponent implements OnInit {

  maxchar = 200;
  role = '';
  chars = 0;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  textareaFormControl = new FormControl('', [Validators.required]);
  constructor() {}

  ngOnInit(): void {}

}
