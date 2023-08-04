import { Component, OnInit } from '@angular/core';
//https://indepth.dev/posts/1416/headless-angular-components
@Component({
  selector: 'app-headless-component',
  template: `
  <h1>Hello File Select!</h1>
  <file-select>
    <button
      *callbackTemplate="let context"
      class="primary"
      (click)="context.openFileSelectDialog()"
    >
      pick a file
    </button>
  </file-select>
`
})
//A parent component's content children are any elements, 
//components, or directives placed within the parent's starting and closing tags
export class HeadlessComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
