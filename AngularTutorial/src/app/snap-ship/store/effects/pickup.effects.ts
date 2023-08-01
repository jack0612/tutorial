import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PickupService } from '../../common/services/pickup.service';
import { of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as fromPickupActions from '../actions/pickup.action';


@Injectable()
export class PickupEffects {
  constructor(private _actions$: Actions,
    private _pickupService: PickupService,
  ) { }

  loadPickupDateTime$ = createEffect(() => this._actions$.pipe(
    ofType(fromPickupActions.getBookedPickups),
    switchMap(() => this._pickupService.getBookedPickups()
      .pipe(
        tap(data => console.log('effects data', data)),
        map(bookedPickupsDto => fromPickupActions.getBookedPickupsSuccess({ bookedPickupsDto })),

        catchError((errorMessage) => {
          console.log('caught error in effects', errorMessage);
          let bookedPickupsDto = {
            bookedPickups: [{
              date: 'Jan 11, 2021',
              time: '12 pm - 1 pm',
              address: '365 March RD',
              location: 'Front door',
              instruction: 'knock front door'
            },
            {
              date: 'Jan 12, 2021',
              time: '1 pm - 2 pm',
              address: '365 March RD',
              location: 'Back door',
              instruction: 'knock back door'
            }],
            preferedBookedPickupIndex: 1
          };
          //return throwError(error);//throwError() does not make reducer get invoked
          console.log("effects continue")
          return of(fromPickupActions.getBookedPickupsFailure({ errorMessage }))

        }
        )

      )

    )
  ));
}