import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
//https://stackoverflow.com/questions/58172020/ngrx-update-input-properties-on-child-components-without-using-ngonchanges-or-a
/*
this.file$ =  this.store
  .pipe(
    select(getFiles), // notice, we're not using takeUntil because Angular handles the subscription
    tap(files => { 
     this.files = files; // assign the value here
    })
) 
<child-component [sth] = 'files$ | async'

*/
import { selectBook1, selectBook2, selectBook3, selectBookCollection, selectBooks, selectCollection } from './store/books.selectors';
import {
  retrievedBookList,
  addBook,
  removeBook,
  testAction,
} from './store/books.actions';
import { GoogleBooksService } from './book-list/books.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngrx-basic',
  templateUrl: './ngrx-basic.component.html',
})
export class NgrxBasicComponent {
  books$
  bookCollection$
  bookId
  /*
    parent ngAfterViewChecked
  ngrx-basic.component.ts:40 -----------displatch
  collection.reducer.ts:10 -----------reducer
  books.effects.ts:11 66 effects
  books.effects.ts:15 777 effect
    ngrx-basic.component.ts:79 parent ngDoCheck
  */
  //after dispatch, reducer call is happened in the same lifecycle
  onAdd(bookId) {
    console.log('-----------1displatch addBook', bookId)
    this.store.dispatch(addBook({ bookId }));
    var promise = new Promise((resolve, reject) => {
      resolve("Promise Resolved");
    })
    promise.then((success) => {
      console.log(success);
    });
    console.log('-----------2displatch addBook', bookId + 1)
    this.store.dispatch(addBook({ bookId: bookId + 1 }));
  }
  /*
  sequence: dispatch, reducer, selector, effect
//ngrx-basic.component.ts:42 ----------displatch addBook v3EyEAAAQBAJ
// collection.reducer.ts:10 -----------addBooker reducer
//for dispatch,reducer,effect,select sequence testing, select collection ['v3EyEAAAQBAJ']
// books.effects.ts:11 66 effects
//-----------testAction reducer
// test action effect1
// ngrx-basic.component.ts:50 -----------displatch addBook v3EyEAAAQBAJ1
// collection.reducer.ts:10 -----------addBooker reducer
//for dispatch,reducer,effect,select sequence testing, select collection ['v3EyEAAAQBAJ']
// books.effects.ts:11 66 effects
//-----------testAction reducer
// test action effect1
// ngrx-basic.component.ts:48 Promise Resolved
  */

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) { }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
    this.books$ = this.store.pipe(select(selectBooks));
    this.bookCollection$ = this.store.pipe(select(selectBookCollection));
    //parameterized selector
    this.store.select(selectBook1, { id: '47' });
    this.store.select(selectBook2('47'));
    this.store.select(selectBook3)
      .pipe(
        map((fun) => fun(this.bookId))
      );
    //for dispatch,reducer,effect,select sequence testing
    this.store.select(selectCollection).subscribe(collection => {
      console.log('for dispatch,reducer,effect,select sequence testing, select collection', collection);
      // const bookId = 'v3EyEAAAQBAJ';
      // console.log('-----------3displatch addBook', bookId + 1)
      this.store.dispatch(testAction());
    });
  }






  private print = true;



  ngOnChanges() {
    this.print && console.log(`parent ngOnChanges  `);
  }


  ngDoCheck() {
    this.print && console.log("parent ngDoCheck")
  }

  ngAfterContentInit() {
    this.print && console.log("parent ngAfterContentInit");
  }

  ngAfterContentChecked() {
    this.print && console.log("parent ngAfterContentChecked");
  }

  ngAfterViewInit() {
    this.print && console.log("parent ngAfterViewInit");
  }

  ngAfterViewChecked() {
    this.print && console.log("parent ngAfterViewChecked");
  }

  ngOnDestroy() {
    this.print && console.log("parent ngOnDestroy");
  }

}