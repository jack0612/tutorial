import { Action, createReducer, on } from '@ngrx/store';
import * as customsDetailsActions from '../actions/customs-details.action';
import { ApiErrorState, LoadingState, ResultState } from '../../common/models/api.state';
import { ApiError } from '../../common/models/api.error'
import { ENTRY_REASONSFOREXPORT_OF_CUSTOMSDETAILS, ENTRY_REASONSFOREXPORTRESULTSTATE_OF_CUSTOMSDETAILS } from "../store-entry-name";
import { initialCustomsDetailsState, CustomsDetailsState } from '../state/customs-details.state'
import { deepCopy } from '../../ship-common/utils/deep-copy.util';


const _reducer = createReducer(
  initialCustomsDetailsState,
  on(customsDetailsActions.getReasonsForExport, state => (
    {
      ...state,
      [ENTRY_REASONSFOREXPORTRESULTSTATE_OF_CUSTOMSDETAILS]: LoadingState.LOADING
    }
  )),
 
  on(customsDetailsActions.getReasonsForExportSuccess, (state, { reasonsForExport }) => {
    const newState = {...state};
    newState[ENTRY_REASONSFOREXPORT_OF_CUSTOMSDETAILS] = deepCopy(reasonsForExport);
    newState[ENTRY_REASONSFOREXPORTRESULTSTATE_OF_CUSTOMSDETAILS] = LoadingState.LOADED;
    return newState;
  }),
   
  on(customsDetailsActions.getReasonsForExportFailure, (state, { errorMessage }) => {
    const newState = { ...state };
    let apiErrorState: ResultState = { apiError: { desc: errorMessage } }; 
    newState[ENTRY_REASONSFOREXPORTRESULTSTATE_OF_CUSTOMSDETAILS] = apiErrorState;
    return newState;
  }),
 
)

export function customsDetailsReducer(state: CustomsDetailsState = initialCustomsDetailsState, action: Action) {
  return _reducer(state, action);
}