import { createReducer, on, Action } from '@ngrx/store';

import { retrievedBookList, testAction } from './books.actions';
import { Book } from '../book-list/books.model';

export const initialState: ReadonlyArray<Book> = [];

const _reducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { Book }) => [...Book]),
  on(testAction, (state) => {
    console.log('-----------testAction reducer')
    return {...state};
  }),
);


export function booksReducer(state: ReadonlyArray<Book> = initialState, action: Action) {
  return _reducer(state, action);
}