import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, startWith } from 'rxjs/operators';

import { TwainService } from './twain.service';
//https://codecraft.tv/courses/angular/unit-testing/asynchronous/
@Component({
  selector: 'twain-quote',
  template: `
    <p class="twain"><i>{{quote | async}}</i></p>
    <button (click)="getQuote()">Next quote</button>
    <p class="error" *ngIf="errorMessage">{{ errorMessage }}</p>`,
  styles: [
    `.twain { font-style: italic; } .error { color: red; }`
  ]

})
export class AsyncSpyComponent implements OnInit {

  errorMessage: string='';
  quote: Observable<string>|null=null;

  constructor(private twainService: TwainService) {}

  ngOnInit(): void {
    this.getQuote();
  }

  getQuote() {
    this.errorMessage = '';
    this.quote = this.twainService.getQuote().pipe(
      startWith('...'),
      catchError( (err: any) => {
        // Wait a turn because errorMessage already set once this turn
        setTimeout(() => this.errorMessage = err.message || err.toString());
        return of('...'); // reset message to placeholder
      })
    );
  }


}
