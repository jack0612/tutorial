import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-jack-checkbox',
  templateUrl: './jack-checkbox.component.html',
  styleUrls: ['./jack-checkbox.component.scss']
})
export class JackCheckboxComponent  {

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

}
