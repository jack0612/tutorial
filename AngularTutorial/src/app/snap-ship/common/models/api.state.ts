import { ApiError } from './api.error';

export const enum LoadingState {
  INIT = 'INIT',
  LOADING = 'LOADING',
  LOADED = 'LOADED'
}

export interface ApiErrorState {
  apiError: ApiError;
}

export type ResultState = LoadingState | ApiErrorState;

export function getError(callState: ResultState): string | null {
  if ((callState as ApiErrorState).apiError !== undefined) {
    return (callState as ApiErrorState).apiError.code;
  }
  return null;
}
