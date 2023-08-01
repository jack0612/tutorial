import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet-select',
  template: `
    <app-client-1></app-client-1>
 
  `,
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: auto auto;
      }

      app-client-1,
      app-client-2 {
        margin: 1rem;
      }
    `,
  ],
})
export class NgTemplateOutletSelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
