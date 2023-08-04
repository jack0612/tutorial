import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

@Component({
  selector: 'app-mat-calendar-date-class',
  templateUrl: './mat-calendar-date-class.component.html',
  styleUrls: ['./mat-calendar-date-class.component.scss']
})
export class MatCalendarDateClassComponent implements OnInit {

  selectedDate: any;

  datesToHighlight = ["2021-01-21T18:30:00.000Z", 
  "2021-01-22T18:30:00.000Z", "2021-01-24T18:30:00.000Z", "2021-01-28T18:30:00.000Z"];

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(event){
    console.log(event);
    this.selectedDate = event;
  }

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      /*
      const highlightDate = this.datesToHighlight
        .map(strDate => new Date(strDate))
        .some(d => d.getDate() === date.getDate()
        && d.getMonth() === date.getMonth()
        && d.getFullYear() === date.getFullYear());
      */
     let temp= this.datesToHighlight.map(strDate => new Date(strDate));
     const highlightDate = temp
     .some(d => d.getDate() === date.getDate()
     && d.getMonth() === date.getMonth()
     && d.getFullYear() === date.getFullYear());
     console.log('temp',temp,highlightDate,date)
      return highlightDate ? 'special-date' : '';
    };
  }
}
