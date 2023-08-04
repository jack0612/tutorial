import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
//https://rxjs.dev/api/index/function/throwError
// This creation function is useful for creating an observable that will create an error and error every 
// time it is subscribed to. Generally, inside of most operators when you might want to return an errored 
// observable, this is unnecessary. In most cases, such as in the inner return of concatMap, mergeMap, defer, 
// and many others, you can simply throw the error, and RxJS will pick that up and notify the consumer of 
// the error.
@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.scss']
})
export class ThrowErrorComponent implements OnInit {

  constructor() {
    console.log('00000000000000ThrowErrorComponent')
   }

  ngOnInit(): void {
    this.example1();
  }

  private example1() {
    let errorCount = 0;

    const errorWithTimestamp$ = throwError(() => {
      const error: any = new Error(`This is error number ${++errorCount}`);
      error.timestamp = Date.now();
      console.log('example1',error)
      return error;
    });

    errorWithTimestamp$.subscribe({
      error: err => console.log(err.timestamp, err.message)
    });

    errorWithTimestamp$.subscribe({
      error: err => console.log(err.timestamp, err.message)
    });
  }
}
