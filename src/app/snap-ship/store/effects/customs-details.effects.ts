import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as customsDetailsActions from '../actions/customs-details.action';
import { CustomsService } from 'src/app/ship-common/services/customs.service';

@Injectable()
export class CustomsDetailsffects {
    constructor(private _actions$: Actions,
        private _customsService: CustomsService,
    ) { }

    loadReasonsForExport$ = createEffect(() => this._actions$.pipe(
        ofType(customsDetailsActions.getReasonsForExport),
        switchMap(({ isConsumer }) => this._customsService.getReasonsForExport(isConsumer)
            .pipe(
                map(reasonsForExport => customsDetailsActions.getReasonsForExportSuccess({ reasonsForExport })),
                catchError((errorMessage: string) => of(customsDetailsActions.getReasonsForExportFailure({ errorMessage }))))
        )
    ));
}