import { Component, ContentChild, OnInit } from '@angular/core';
import { IWidget,WIDGET } from '../widget.interface'
@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.scss']
})
export class WidgetWrapperComponent implements OnInit {
  @ContentChild(WIDGET as any, { static: true }) widget: IWidget;
  constructor() { }

  ngOnInit(): void {
    this.widget && this.widget.load();
  }

  onRefresh(){
    this.widget && this.widget.refresh();
  }

}
