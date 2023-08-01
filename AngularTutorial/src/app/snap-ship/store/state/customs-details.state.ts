
import { ResultState, LoadingState } from "../../common/models/api.state";
import { ENTRY_REASONSFOREXPORTRESULTSTATE_OF_CUSTOMSDETAILS, ENTRY_REASONSFOREXPORT_OF_CUSTOMSDETAILS } from "../store-entry-name";

export interface CustomsDetailsState {
    [ENTRY_REASONSFOREXPORT_OF_CUSTOMSDETAILS]: string[];
    [ENTRY_REASONSFOREXPORTRESULTSTATE_OF_CUSTOMSDETAILS]: ResultState;
}

export const initialCustomsDetailsState: CustomsDetailsState = {
    [ENTRY_REASONSFOREXPORT_OF_CUSTOMSDETAILS]: [],
    [ENTRY_REASONSFOREXPORTRESULTSTATE_OF_CUSTOMSDETAILS]: LoadingState.INIT
}