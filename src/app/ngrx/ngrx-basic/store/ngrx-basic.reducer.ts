
import { ActionReducerMap } from '@ngrx/store';
import { NgrxBasicState } from './ngrx-basic.state'

import { collectionReducer } from './collection.reducer';
import { booksReducer } from './books.reducer';

export const ngrxBasicReducers: ActionReducerMap<NgrxBasicState> = {
    books: booksReducer,
    collection: collectionReducer
}

