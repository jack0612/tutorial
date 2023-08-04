import { createSelector } from "@ngrx/store";
import { LoadingState } from "../../common/models/api.state";
import { AppState } from "../state/app.state";
import { ENTRY_PICKUP_OF_ROOT, ENTRY_BOOEDPICKUPSRESULTSTATE_OF_PICKUP, ENTRY_BOOKEDPICKUPS_OF_PICKUP } from "../store-entry-name";

const pickupState = (state: AppState) => state[ENTRY_PICKUP_OF_ROOT];

export const isBookedPickupLoading = createSelector(
    pickupState,
    state => state[ENTRY_BOOEDPICKUPSRESULTSTATE_OF_PICKUP] === LoadingState.LOADING
);

export const hasBookedPickupLoaded = createSelector(
    pickupState,
    state => state[ENTRY_BOOEDPICKUPSRESULTSTATE_OF_PICKUP] === LoadingState.LOADED
)

export const getBookedPickupsDto = createSelector(
    pickupState,
    state => state && state[ENTRY_BOOKEDPICKUPS_OF_PICKUP]
)