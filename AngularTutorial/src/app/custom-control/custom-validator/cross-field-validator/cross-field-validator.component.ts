import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { crossFieldValidator } from './cross-field-validator';
import { Room } from './room.dodel';

@Component({
  selector: 'app-cross-field-validator',
  templateUrl: './cross-field-validator.component.html',
  styleUrls: ['./cross-field-validator.component.scss']
})
export class CrossFieldValidatorComponent implements OnInit {
  profileForm: FormGroup;

  rooms: Room[] = [
    { text: 'room 1', value: 'room-1' },
    { text: 'room 2', value: 'room-2' },
    { text: 'room 3', value: 'room-3' },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      room: ['', Validators.required],
    },
    {
      validators: [crossFieldValidator(18)],
      updateOn: 'blur',
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
