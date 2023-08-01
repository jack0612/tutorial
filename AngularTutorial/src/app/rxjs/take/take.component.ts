import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { finalize, take } from 'rxjs/operators';
//Takes the first count values from the source, then completes.
@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const intervalCount = interval(1000);
    const takeFive = intervalCount.pipe(take(5));
    const sub = takeFive.subscribe(
      x => {
        console.log('88 ', sub);
        console.log(x)
      },
      (error) => console.log(error),
      () => {
        console.log('99 take will complete by itself', sub);
      }
    );
    const example = interval(1000).pipe(
      take(5), //take only the first 5 values
      finalize(() => console.log('example', example)) // Execute when the observable completes
    )
    example.subscribe(val => {
      console.log('1111 ' + val)
    });

    const mySubject = new Subject();
    const myObservable$ = mySubject.asObservable();
    myObservable$.pipe(take(1)).subscribe(data => {
      console.log('0000 data fom subject', data)
    });
    mySubject.next('abcd');//will print: 0000 data fom subject abcd
    mySubject.next('efgh');//will NOT print: 0000 data fom subject efgh

    this.seq();
  }

  private seq() {
    console.log('-----------------rxjs seq')



    var foo = new Observable((subscriber) => {
      console.log('Hello');
      subscriber.next(42);
      subscriber.next(100);
      subscriber.next(200);
      setTimeout(() => {
        subscriber.next(300); // happens asynchronously
      }, 1000);
    });

    console.log('before');
    foo.subscribe((x) => {
      console.log(x);
    });
    console.log('after');

    console.log('before2');
    foo.subscribe((x) => {
      console.log(x);
    });
    console.log('after2');

  }

}
