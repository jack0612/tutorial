import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NgrxBasicState } from './ngrx-basic.state'
const ngrxBasicFeatureKey="ngrxBasic";

export const selectNgrxBasicState = createFeatureSelector<NgrxBasicState>(ngrxBasicFeatureKey);