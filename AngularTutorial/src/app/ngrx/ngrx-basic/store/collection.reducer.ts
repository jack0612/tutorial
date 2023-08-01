import { createReducer, on, Action } from '@ngrx/store';
import { addBook, removeBook } from './books.actions';
 
export const initialState: ReadonlyArray<string> = [];
 
const _reducer = createReducer(
  initialState,
  on(removeBook, (state, { bookId }) => state.filter((id) => id !== bookId)),
  on(addBook, (state, { bookId }) => {
    console.log('-----------addBooker reducer')
    if (state.indexOf(bookId) > -1) return state;
 
    return [...state, bookId];
  }),

);

export function collectionReducer(state: ReadonlyArray<string> = initialState, action: Action) {
  return _reducer(state, action);
}