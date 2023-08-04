import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { addBook, addBookSuccess, testAction } from './books.actions';

@Injectable()
export class BooksEffects {

    addBook$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addBook),
            switchMap(() => {
                console.log('66 effects');
                return of(addBookSuccess())
            })

        ))
    // .subscribe(()=>{
    //     console.log('777 effect')
    // });

    testAction$ = createEffect(() => this.actions$.pipe(

        ofType(testAction),
        switchMap(() => {
            console.log('test action effect1');
            return of(addBookSuccess())
        })
    ))
    // .subscribe(()=>{
    //     console.log('test action effect2')
    // });

    constructor(
        private actions$: Actions,
    ) { }
}

