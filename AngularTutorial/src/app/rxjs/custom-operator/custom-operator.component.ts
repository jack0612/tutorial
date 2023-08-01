import { Component, OnInit } from '@angular/core';
import { interval, MonoTypeOperatorFunction, Observable, ObservableInput, of, OperatorFunction, pipe } from 'rxjs';
import { concatMap, debounceTime, delay, distinctUntilChanged, mergeMap, switchMap, take, tap } from 'rxjs/operators';
//https://indepth.dev/posts/1421/rxjs-custom-operators



@Component({
  selector: 'app-custom-operator',
  templateUrl: './custom-operator.component.html',
  styleUrls: ['./custom-operator.component.scss']
})
export class CustomOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source3$ = of("politics", "sport");


    type DataProducer<T> = (q: string) => ObservableInput<T>;
    function liveSearch<R>(
      time: number,
      dataProducer: DataProducer<R>
    ): OperatorFunction<string, R> {
      return pipe(
        debounceTime(time),
        distinctUntilChanged(),
        switchMap(dataProducer)
      );
    }

    const newsProducer = (q: string) => of(`======Data fetched for ${q}`);

    const result3$ = source3$.pipe(liveSearch(500, newsProducer));

    result3$.subscribe(console.log);
  }



}

// Basics
const source$ = interval(1000).pipe(take(3));

function identity<T>(source$: Observable<T>): Observable<T> {
  return source$;
}

function log<T>(source$: Observable<T>): Observable<T> {
  return source$.pipe(tap(v => console.log(`log: ${v}`)));
}

// function logWithTag<T>(tag: string): (source$: Observable<T>) => Observable<T> {
//   return source$ =>
//     source$.pipe(tap(v => console.log(`logWithTag(${tag}): ${v}`)));
// }

function logWithTag<T>(tag: string): MonoTypeOperatorFunction<T> {
  return pipe(tap(v => console.log(`logWithTag(${tag}): ${v}`)));
}

function tapOnce<T>(job: Function): MonoTypeOperatorFunction<T> {
  let isFirst = true;

  return pipe(
    tap(v => {
      if (!isFirst) {
        return;
      }

      job(v);
      isFirst = false;
    })
  );
}


