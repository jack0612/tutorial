import { Component, OnInit, ViewChild } from '@angular/core';
import { of, from, fromEvent, Observable } from 'rxjs';
import { delay, map, mergeMap, concatMap } from 'rxjs/operators';
//https://www.tektutorialshub.com/angular/using-concatmap-in-angular/
@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*
    const getData = (param) => {
      const delayTime = 5000;//Math.floor(Math.random() * 10000) + 1;
      return of(`retrieved new data with params: ${param} and delay: ${delayTime}`).pipe(
        delay(delayTime)
      )
    }

    // using a regular map
    from([1, 2, 3, 4]).pipe(
      map(param => getData(param))
    ).subscribe(val => val.subscribe(data => console.log('map:', data, ' @', new Date().getMilliseconds() % 100000)));

    // using mergeMap
    from([1, 2, 3, 4]).pipe(
      mergeMap(param => getData(param))
    ).subscribe(val => console.log('mergeMap:', val, ' @', new Date().getMilliseconds() % 100000));

    // using concatMap
    from([1, 2, 3, 4]).pipe(
      concatMap(param => getData(param))
    ).subscribe(val => console.log('concatMap:', val, ' @', new Date().getMilliseconds() % 100000));

*/
    //ConcatMap always waits for the previous inner observable to finish before creating a new observble. 
    let srcObservable = of(1, 2, 3, 4)
    let innerObservable = of('A', 'B', 'C', 'D')
      return;
    srcObservable.pipe(
      concatMap(val => {
        console.log('Source value ' + val)
        console.log('starting new observable')
        return innerObservable
      })
    ).subscribe(ret => {
      console.log('Recd ' + ret);
    })
  }

  @ViewChild('button',{static:true}) button;
  clicks$:Observable<any>;
  count=0;
 
  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.button.nativeElement, 'click');
    this._concatMapExample3();
  }
 
  private _delayedObs(count:number) {
    return new Observable((observer) => {
      setTimeout(() => { observer.next(count+" A") }, 1000);
      setTimeout(() => { observer.next(count+" B") }, 2000);
      setTimeout(() => { observer.next(count+" C") }, 3000);
      setTimeout(() => { observer.next(count+" D") }, 4000);
      setTimeout(() => { observer.next(count+" E"); observer.complete() }, 5000);
    })
  }

  private _concatMapExample3() {
 
    let obs=
 
    this.clicks$
      .pipe(
        concatMap(() => {
          this.count=this.count+1;
          return this._delayedObs(this.count)
        })
      )
      .subscribe(val => console.log(val));
  }
 

}
