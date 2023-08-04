import { Directive } from '@angular/core';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[cardItem]'
})
export class CardItemDirective {}

@Directive({
  selector: '[listItem]'
})
export class ListItemDirective {}


@Component({
  selector: 'card-or-list-view',
  template: `
  <ng-container [ngSwitch]="mode">
  <ng-container *ngSwitchCase="'card'">
    <div *ngFor="let item of items" style="margin: 5px;border: black 1px solid">
      <ng-container *ngTemplateOutlet="cardItemTemplate; context: {$implicit: item}">
      </ng-container>
    </div>
  </ng-container>
  <ul *ngSwitchCase="'list'">
    <li *ngFor="let item of items">
      <ng-container *ngTemplateOutlet="listItemTemplate; context: {$implicit: item}"></ng-container>
    </li>
  </ul>
  </ng-container>
  `
})
export class CardOrListViewComponent {

  @Input() items: any[] = [];

  @Input() mode: 'card' | 'list' = 'card';


  // Read in our structural directives as TemplateRefs
  @ContentChild(CardItemDirective, {read: TemplateRef}) cardItemTemplate;
  @ContentChild(ListItemDirective, {read: TemplateRef}) listItemTemplate;

}


@Component({
  selector: 'ngTemplateOutletUsage',
  template: `
    <card-or-list-view
        [items]="items"
        [mode]="mode">
      <ng-container *cardItem="let item">
        <h1>{{item.header}}</h1>
        <p>{{item.content}}</p>
      </ng-container>
      <span *listItem="let item">
        <h1>{{item.header}}</h1>
        <p>{{item.content}}</p>
      </span>
    </card-or-list-view>
    <div style="display:flex; flex-direction: column; align-items: center; padding: 10px">
      <span>Mode: {{ mode }}</span>
      <button (click)="mode = mode === 'list' ? 'card' : 'list'">Switch Mode</button>
    </div>
`
})
export class NgTemplateOutletUsageExampleComponent {
  mode = 'card';
  items = [
    {
      header: 'My first item',
      content: 'my first content is here...'
    },
    {
      header: 'My second item',
      content: 'The single responsibility principle...'
    } // ... more items
  ];
}
