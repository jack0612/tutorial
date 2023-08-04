import { createSelector, createFeatureSelector } from "@ngrx/store";
import { NgrxBasicState } from "./ngrx-basic.state";
import { Book } from "../book-list/books.model";
import { selectNgrxBasicState } from './ngrx-basic.selectors'
export const selectBooks = createSelector(
    selectNgrxBasicState,
    (state: NgrxBasicState) => state.books,
);

export const selectCollection = createSelector(
    selectNgrxBasicState,
    (state: NgrxBasicState) => state.collection,
)

export const selectBookCollection = createSelector(
    selectBooks,
    selectCollection,
    (books: Array<Book>, collection: Array<string>) => {
        if (collection && books) {
            return collection.map((id) => books.find((book) => book.id === id));
        }
        return [];
    }
);

//parameterized selector
export const selectBook1 = createSelector(
    selectBooks,
    (books, props) => books[props.id]
);

export const selectBook2 = (id: string) =>
    createSelector(selectBooks, (books) => books[id]);

export const selectBook3 = createSelector(
    selectBooks,
    (books) => (id: string) => books[id],
);
 

 

