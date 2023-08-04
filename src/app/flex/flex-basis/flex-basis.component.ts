import { Component, OnInit } from '@angular/core';
//1 flex-basis is Limited by max-width and min-width
//2 flex-basis falls back to width, falls back to coumputed width
//3 if containter has no enough space, item will shrink no matter flex-basis, width is specified, but  Limited by max-width and min-width
//If no flex-basis is specified, then the flex-basis falls back to the item's width property.
//If no width is specified, then the flex-basis falls back to the computed width of the item's contents.
//4. w=% width: 	Defines the width in % of the parent element
@Component({
  selector: 'app-flex-basis',
  templateUrl: './flex-basis.component.html',
  styleUrls: ['./flex-basis.component.scss']
})
export class FlexBasisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
