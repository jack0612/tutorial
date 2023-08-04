import { Component, OnInit } from '@angular/core';
 
import { forkJoin, zip, combineLatest, Subject } from 'rxjs';
import { withLatestFrom, take, first, tap } from 'rxjs/operators';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.scss']
})
export class WithLatestFromComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 

    // 1. Define shirt color and logo options
    type Color = 'white' | 'green' | 'red' | 'blue';
    type Logo = 'fish' | 'dog' | 'bird' | 'cow';

    // 2. Create the two persons - color and logo observables,
    // They will communicate with us later (when we subscribe)
    const color$ = new Subject<Color>();
    const logo$ = new Subject<Logo>();

    // 3. We are ready to start printing shirts. You need to subscribe to color and logo observables to produce shirts. We will write that code here later.
    color$.pipe(
      tap(color=>console.log('1 color',color)),
      withLatestFrom(logo$))
    .subscribe(([color, logo]) => console.log(`${color} shirt with ${logo}`));

    // 4. The two persons(observables) are doing their job, picking color and logo
    color$.next('white');
    logo$.next('fish');

    color$.next('green');
    logo$.next('dog');

    color$.next('red');
    logo$.next('bird');

    color$.next('blue');

    // 5. When the two perso
  }

}
