import { createAction, props } from '@ngrx/store';


export const getReasonsForExport = createAction(
    '[Shipment page CustomesDetailsComponent] Get reasonsForExport',
    props<{ isConsumer: boolean }>()

);

export const getReasonsForExportSuccess = createAction(
    '[customsService.getReasonsForExport API]  Success',
    props<{ reasonsForExport: String[] }>()
);

export const getReasonsForExportFailure = createAction(
    '[customsService.getReasonsForExport API] Failure',
    props<{ errorMessage:string}>()
);
