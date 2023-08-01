import { Action, createReducer, on } from '@ngrx/store';
import * as pickupActions from '../actions/pickup.action';
import {  LoadingState, ResultState } from '../../common/models/api.state';
import { ENTRY_BOOEDPICKUPSRESULTSTATE_OF_PICKUP, ENTRY_BOOKEDPICKUPS_OF_PICKUP } from '../store-entry-name'
import { initialPickupState, PickupState } from '../state/pickup.state'
import { deepCopy } from '../../ship-common/utils/deep-copy.util';



const _reducer = createReducer(
  initialPickupState,
  on(pickupActions.getBookedPickups, state => (
    {
      ...state,
      [ENTRY_BOOEDPICKUPSRESULTSTATE_OF_PICKUP]: LoadingState.LOADING
    }
  )),
  on(pickupActions.getBookedPickupsSuccess, (state, { bookedPickupsDto }) => {

    const newState = { ...state };
    newState[ENTRY_BOOKEDPICKUPS_OF_PICKUP] = deepCopy(bookedPickupsDto);
    newState[ENTRY_BOOEDPICKUPSRESULTSTATE_OF_PICKUP] = LoadingState.LOADED;
    return newState;
  }),
  on(pickupActions.getBookedPickupsFailure, (state, { errorMessage }) => {
    const newState = { ...state };


    let apiErrorState: ResultState = { apiError: { desc: errorMessage } };

    newState[ENTRY_BOOEDPICKUPSRESULTSTATE_OF_PICKUP] = apiErrorState;

    return newState;
  }),
)

export function pickupReducer(state: PickupState = initialPickupState, action: Action) {

  return _reducer(state, action);
}