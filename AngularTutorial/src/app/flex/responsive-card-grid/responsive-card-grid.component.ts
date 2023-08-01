import { Component, OnInit } from '@angular/core';
/*
https://zoaibkhan.com/blog/create-a-responsive-card-grid-in-angular-using-flex-layout-part-1/
fxLayoutGap="16px grid"
*/
@Component({
  selector: 'app-responsive-card-grid',
  templateUrl: './responsive-card-grid.component.html',
  styleUrls: ['./responsive-card-grid.component.scss']
})
export class ResponsiveCardGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Card View Demo';
  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
}
