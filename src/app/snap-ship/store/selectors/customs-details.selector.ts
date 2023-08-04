import { createSelector } from "@ngrx/store";
import { LoadingState } from "../../common/models/api.state";
import { AppState } from "../state/app.state";
import { ENTRY_CUSTOMSDETAILS_OF_ROOT, ENTRY_REASONSFOREXPORT_OF_CUSTOMSDETAILS, ENTRY_REASONSFOREXPORTRESULTSTATE_OF_CUSTOMSDETAILS } from "../store-entry-name";

const custsomsDetailsState = (state: AppState) => state[ENTRY_CUSTOMSDETAILS_OF_ROOT];

export const isReasonsForExportLoading = createSelector(
    custsomsDetailsState,
    state => state[ENTRY_REASONSFOREXPORTRESULTSTATE_OF_CUSTOMSDETAILS] === LoadingState.LOADING
);

export const hasReasonsForExportLoaded = createSelector(
    custsomsDetailsState,
    state => state[ENTRY_REASONSFOREXPORTRESULTSTATE_OF_CUSTOMSDETAILS] === LoadingState.LOADED
)

export const getReasonsForExport = createSelector(
    custsomsDetailsState,
    state => state[ENTRY_REASONSFOREXPORT_OF_CUSTOMSDETAILS]
)