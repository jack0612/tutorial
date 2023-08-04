import { Component, OnInit } from '@angular/core';
/*
https://codinglatte.com/posts/angular/angular-flex-layout-introduction/
fxLayout,fxLayoutAlign,fxLayoutGap
fxFlex,fxFlexAlign,fxFlexFill,fxFlexOffset,fxFlexOrder
fxLayoutGap="16px grid"
breakpoints:
xs,sm,md,lg,xl
gt-xs
lt-sm,gt-sm
lt-md,gt-md
lt-lg,gt-lg
lt-xl
xs  --- mobi;e
sm  --- tablet
General usage APIs (Directives)
The following directives (APIs) can be use on any html element regardless of whether its container, container element or none.
fxHide   fxShow  
ngClass   ngStyles 
imgSrc  
*/
@Component({
  selector: 'app-flex-layout2',
  templateUrl: './flex-layout2.component.html',
  styleUrls: ['./flex-layout2.component.scss']
})
export class FlexLayout2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
