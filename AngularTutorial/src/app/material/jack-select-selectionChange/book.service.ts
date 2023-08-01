import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Book } from './book';
import { Writer } from './writer';

const ALL_WRITERS: Writer[] = [
  { wid: 11, name: 'Premchand' },
  { wid: 12, name: 'Amrita Pritam' }
];

const ALL_BOOKS: Book[] = [
  { bid: 101, name: 'Godaan', wid: 11 },
  { bid: 102, name: 'Karmabhoomi', wid: 11 },
  { bid: 103, name: 'Nirmala', wid: 11 },
  { bid: 104, name: 'Pinjar', wid: 12 },
  { bid: 105, name: 'Kore Kagaz', wid: 12 }
];

@Injectable ()
export class BookService {
  getAllWriters() {
    return ALL_WRITERS;
  }
  getBooksByWriter(writerId) {
    return ALL_BOOKS.filter(book => book.wid === writerId);
  }
  saveBook(books) {
    console.log(JSON.stringify(books));
  }
} 