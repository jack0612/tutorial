import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent {


  @ViewChild('button',{static:true}) button;
  clicks$:Observable<any>;
 
  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.button.nativeElement, 'click');
    this.mergeMapExample();
  }
 
  delayedObs(count:number) {
    return new Observable((observer) => {
      setTimeout(() => { observer.next(count+" A") }, 1000);
      setTimeout(() => { observer.next(count+" B") }, 2000);
      setTimeout(() => { observer.next(count+" C") }, 3000);
      setTimeout(() => { observer.next(count+" D") }, 4000);
      setTimeout(() => { observer.next(count+" E"); observer.complete() }, 5000);
    })
  }
 count=0;
  mergeMapExample() {
 
    let obs=
    this.clicks$
    .pipe(
      mergeMap(() => {
        this.count=this.count+1;
        return this.delayedObs(this.count)
      })
    )
    .subscribe(val => console.log(val));
}

}
