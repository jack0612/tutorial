import { Component, OnInit } from '@angular/core';
import { defer, interval, of, pipe, throwError, timer } from 'rxjs';
import { delay, delayWhen, map, retry, retryWhen, scan, take, tap } from 'rxjs/operators';
import { retryWithDelay, retryWithDelay2 } from '../operators/retry-with-delay'
@Component({
  selector: 'app-retry-when2',
  templateUrl: './retry-when2.component.html',
  styleUrls: ['./retry-when2.component.scss']
})
export class RetryWhen2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const usersData = {
      responseStatus: '500',
      users: [
        { id: 1, name: 'LeeLa' },
        { id: 2, name: 'LeeLa2' },
      ]
    };

    // of(...usersData.users)
    //   .pipe(
    //     delay(1000),
    //     tap((user) => {
    //       if (!usersData.responseStatus.startsWith('2')) {
    //         throw '?????????????????????????????????error' + usersData.responseStatus
    //       }
    //     }),
    //     //retry(3)
    //     retryWhen((error)=>{
    //       return error.pipe(
    //         tap(errors=>console.log('8888888888888888',errors)),

    //       )

    //     })
    //   )
    //   .subscribe(data => {
    //     console.log('==============================', data)
    //   });
    // setTimeout(() => {
    //   usersData.responseStatus = '200';
    // }, 2000);

    //this.retryExample();
    this.retryWhenExample5();
  }

  private retryExample() {
    interval(1000)
      .pipe(
        map(val => {
          if (val > 2) {
            throw new Error("Invalid Value");
          }
          return val;
        }),
        retry(2)
      )
      .subscribe(
        val => console.log(val),
        err => console.log(err),
        () => console.log("Complete")
      );
  }
  // retry-when2.component.ts:60 0
  // retry-when2.component.ts:60 1
  // retry-when2.component.ts:60 2
  // retry-when2.component.ts:60 0
  // retry-when2.component.ts:60 1
  // retry-when2.component.ts:60 2
  // retry-when2.component.ts:60 0
  // retry-when2.component.ts:60 1
  // retry-when2.component.ts:60 2


  private retryWhenExample() {
    interval(1000)
      .pipe(
        map(val => {
          if (val > 2) throw new Error("Invalid Value");
          return val;
        }),
        retryWhen(
          error =>
            error.pipe(
              tap(() => console.log("error occurred ")),
              delay(2000),
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

  private retryWhenExample2() {
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
            //take(2),
            delayWhen(val => timer(val * 2000)),
            tap(() => console.log("Retrying ..."))
          )
        )
      )
      .subscribe(
        val => console.log(val),
        err => console.error(err),
        () => console.log("Complete")
      );
  }

  //https://medium.com/javascript-everyday/rxjs-retrywhen-operator-15e3c83b97eb
  private retryWhenExample3() {
    const server = {
      responseStatus: '500',
      carsData: [
        {
          id: 1,
          name: 'Porsche 911'
        },
        {
          id: 2,
          name: 'Ferrari F40'
        }
      ],
      getData() {
        return of(this.carsData).pipe(
          tap(() => {
            if (!this.responseStatus.startsWith('2')) {
              throw this.responseStatus;
            }
          })
        );
      }
    };

    const carsData$ = server.getData().pipe(
      retryWhen(errors =>
        errors.pipe(
          delay(1000),
          tap(errorStatus => {
            if (!errorStatus.startsWith('5')) {
              console.log(errorStatus)
              throw errorStatus;
            }

            console.log('Retrying...', errorStatus);
          })
        )
      )
    );

    carsData$.subscribe({
      next: console.log,
      error: errorStatus => console.log('Error: ' + errorStatus)
    });

    const isAuthenticated = () => Math.random() < 0.5;

    setTimeout(() => (server.responseStatus = isAuthenticated() ? '200' : '403'), 6000);
  }

  private retryWhenExample4() {
    const initialDate = Date.now();
    const failsUntil = 4;

    let i = 0;

    defer(() => of(i++))
      .pipe(
        tap(() => console.log(`Start at ${Date.now() - initialDate}`)),
        tap((value) => {
          if (value < failsUntil) {
            throw Date.now() - initialDate;
          }
        }),
        retryWithDelay(1000, 3, error => error.status == 503)
      )
      .subscribe(
        () => { },
        (error) => console.log(`Error at ${error}`),
        () => console.log(`Complete at ${Date.now() - initialDate}`)
      );
  }

  private retryWhenExample5() {
    const server = {
      responseStatus: '503',
      carsData: [
        {
          id: 1,
          name: 'Porsche 911'
        },
        {
          id: 2,
          name: 'Ferrari F40'
        }
      ],
      getData() {
        return of(this.carsData)
          .pipe(
            tap(() => {
              if (!this.responseStatus.startsWith('2')) {
                throw this.responseStatus;
              }
            })
          );
      }
    };

    const carsData$ = server.getData().pipe(
      retryWithDelay2(2000, 3, error => error == 503)
    );

    carsData$.subscribe({
      next: console.log,
      error: errorStatus => console.log('Error: ' + errorStatus),
      complete: ()=>console.log('====complete')
    });

    const isAuthenticated = () => Math.random() < 0.5;

    setTimeout(() => (server.responseStatus = isAuthenticated() ? '503' : '503'), 6000);
  }
}






