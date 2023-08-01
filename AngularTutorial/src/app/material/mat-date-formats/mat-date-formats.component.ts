import { Component, OnInit } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
//https://www.itsolutionstuff.com/post/angular-material-datepicker-change-date-format-exampleexample.html
//verified that only after the moment lib is installed, this solution works
export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};
@Component({
  selector: 'app-mat-date-formats',
  templateUrl: './mat-date-formats.component.html',
  styleUrls: ['./mat-date-formats.component.scss'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class MatDateFormatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
