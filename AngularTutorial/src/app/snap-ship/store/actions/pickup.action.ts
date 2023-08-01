import { createAction, props } from '@ngrx/store';
import { BookedPickupsDto } from '../../ship-common/models/pickup/booked-pickups-dto.model';

export const getBookedPickups = createAction(
    '[Pickup Page] Get Booked Pickups',
);

export const getBookedPickupsSuccess = createAction(
    '[getBookesPickups API]  Success',
    props<{ bookedPickupsDto: BookedPickupsDto }>()
);

export const getBookedPickupsFailure = createAction(
    '[getBookesPickups API] Failure',
    props<{ errorMessage: string }>()
    
);
