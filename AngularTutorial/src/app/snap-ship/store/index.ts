
import { ActionReducerMap } from '@ngrx/store';
import { pickupReducer } from './reducers/pickup.reducer';
import { ENTRY_CUSTOMSDETAILS_OF_ROOT, ENTRY_PICKUP_OF_ROOT } from './store-entry-name';
 
import { customsDetailsReducer } from './reducers/customs-details.reducer';
import { AppState } from './state/app.state';


export const reducers: ActionReducerMap<AppState> = {
    [ENTRY_PICKUP_OF_ROOT]: pickupReducer,
    [ENTRY_CUSTOMSDETAILS_OF_ROOT]: customsDetailsReducer,
}

