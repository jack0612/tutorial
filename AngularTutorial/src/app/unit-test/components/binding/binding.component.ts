import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  template: `
    <h1>{{title}}</h1>
    `,
  styles: ['h1 { color: green; font-size: 350%}']
})
export class BindingComponent  {
  title = 'Test Tour of Heroes';
  nameInput;

}
