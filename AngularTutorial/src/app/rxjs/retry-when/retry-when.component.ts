import { Component, OnInit } from '@angular/core';
import { interval, Observable, of, throwError, timer } from 'rxjs';
import { delay, delayWhen, finalize, map, mergeMap, retryWhen, scan, switchMap, take, tap } from 'rxjs/operators';
//https://www.tektutorialshub.com/angular/retry-retrywhen-in-angular-observable/
//https://www.javatpoint.com/rxjs-retrywhen-error-handling-operator
export const genericRetryStrategy = ({
  maxRetryAttempts = 3,
  scalingDuration = 1000,
  excludedStatusCodes = []
}: {
  maxRetryAttempts?: number,
  scalingDuration?: number,
  excludedStatusCodes?: number[]
} = {}) => (attempts: Observable<any>) => {
  return attempts.pipe(
    mergeMap((error, i) => {
      const retryAttempt = i + 1;
      // if maximum number of retries have been met
      // or response is a status code we don't wish to retry, throw error
      if (
        retryAttempt > maxRetryAttempts ||
        excludedStatusCodes.find(e => e === error.status)
      ) {
        return throwError(error);
      }
      console.log(
        `Attempt ${retryAttempt}: retrying in ${retryAttempt *
        scalingDuration}ms`
      );
      // retry after 1s, 2s, etc...
      return timer(retryAttempt * scalingDuration);
    }),
    finalize(() => console.log('We are done!'))
  );
};
@Component({
  selector: 'app-retry-when',
  templateUrl: './retry-when.component.html',
  styleUrls: ['./retry-when.component.scss']
})
export class RetryWhenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*
    //emit value every 1s
    const source = interval(1000);
    const example = source.pipe(
      map(val => {
        if (val > 5) {
          //error will be picked up by retryWhen
          throw val;
        }
        return val;
      }),
      retryWhen(errors =>
        errors.pipe(
          //log error message
          tap(val => console.log(`Value ${val} was too high!`)),
          //restart in 6 seconds
          //delayWhen(val => timer(val * 1000))
          take(2)
        )
      )
    );
    
    const subscribe = example.subscribe(val => console.log(val));
    */
          return;
    interval(1000)
      .pipe(
        map(val => {
          if (val > 2) throw new Error("Invalid Value");
          return val;
        }),
        retryWhen(error =>
          error.pipe(
            scan((acc, error) => {
              console.log("attempt " + acc);
              return acc + 1;
            }, 1),
            take(2),
            delayWhen(val => timer(val * 2000)),
            tap(() => console.log("Retrying ..."))
          )
        )
      )
      .subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log("Complete")
      );




  }



}
