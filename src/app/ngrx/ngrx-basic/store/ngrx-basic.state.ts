import { Book } from '../book-list/books.model';

export interface NgrxBasicState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}