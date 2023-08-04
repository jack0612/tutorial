import { ENTRY_CUSTOMSDETAILS_OF_ROOT, ENTRY_PICKUP_OF_ROOT } from "../store-entry-name";
import { CustomsDetailsState } from "./customs-details.state";
import { PickupState } from "./pickup.state";

export interface AppState {
    [ENTRY_PICKUP_OF_ROOT]: PickupState,
    [ENTRY_CUSTOMSDETAILS_OF_ROOT]: CustomsDetailsState,
}

export const initialAppState: AppState = {
    [ENTRY_PICKUP_OF_ROOT]: null,
    [ENTRY_CUSTOMSDETAILS_OF_ROOT]: null
};