import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { formatDate } from '@angular/common';
//https://www.freakyjolly.com/angular-8-7-material-inline-matcalender-datepicker-tutorial-by-example/#.X8_EttBKhPY
//https://www.angularjswiki.com/material/datepicker/
@Component({
  selector: 'app-mat-calendar',
  templateUrl: './mat-calendar.component.html',
  styleUrls: ['./mat-calendar.component.scss'],
  providers: [DatePipe]
})
export class MatCalendarComponent {

  title = 'ng-calendar-demo';
  selectedDate = new Date('2020/09/26');
  startAt = new Date('2020/09/11');
  minDate = new Date('2020/09/14');
  maxDate = new Date(new Date().setMonth(new Date().getMonth() + 1));
  year: any;
  DayAndDate: string;
  format: string = "yyyy-MM-dd";

  myForm: FormGroup;


  constructor(private _datePipe: DatePipe, private _fb: FormBuilder) {
   
    this.myForm = _fb.group(
      {
        isoDate: [''],

      }
    )
    this.onSelect(this.selectedDate);
  }

  ngOnInit() {
    //let date=formatDate(new Date(),'dd-MMM-yyyy',null);
    //console.log('-------formated date',date)
  }

  blurDate(){
    let date=this.myForm.get('isoDate').value;
    let temps=date.split('-');
    let ms=Date.UTC(temps[0],temps[1],temps[2]);
    this.selectedDate=new Date();
    //this.selectedDate.setDate(temps[2])
    this.selectedDate.setFullYear(temps[0],temps[1]-1,temps[2])
    console.log('@@@@@date',date, this.selectedDate)
  }

  onSelect(event) {
    //event: Sat Sep 26 2020 00:00:00 GMT-0400 (Eastern Daylight Time)
    console.log('event',event);
    this.selectedDate = event;
    const dateString = event.toDateString();
    const dateValue = dateString.split(' ');
    console.log('dateString',dateString);
    console.log('dateValue',dateValue)
    this.year = dateValue[3];
    //["Sat", "Sep", "26", "2020"]
    this.DayAndDate = dateValue[0] + ',' + ' ' + dateValue[1] + ' ' + dateValue[2];
    let date=this._datePipe.transform(this.selectedDate,this.format)
    console.log('date after transform ',date)
    //2020-09-26
    this.myForm.get('isoDate').setValue(date);
  }
  myDateFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
}
