import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookService } from './book.service';
import { Writer } from './writer';
import { Book } from './book';
//http://localhost:4200/selectionChange
//there are 4 ways to get selected item:
//1 [(value)]
//2 [(ngModel)]
//3 formControlName
//4 selectionChange($event)
@Component({
  selector: 'jack-select-selectionChange',
  templateUrl: './jack-select-selectionChange.component.html'
})
export class JacksSlectSelectionChangeComponent implements OnInit {
  allWriters: Writer[];
  filteredBooks: Book[];
  constructor(private formBuilder: FormBuilder, private bookService: BookService) { }

  ngOnInit() {
    this.allWriters = this.bookService.getAllWriters();
  }
  bookForm = this.formBuilder.group({
    writer: [null, Validators.required],
    book: [null, Validators.required]
  });
  get writer() {
    return this.bookForm.get('writer');
  }
  get book() {
    return this.bookForm.get('book');
  }
  onWriterChange($event) {
    console.log('Writer changed...');
    console.log(`writer.value()~$event.value()`,this.writer.value,$event.value);
    this.filteredBooks = this.bookService.getBooksByWriter(this.writer.value.wid);
  }
  onBookChange(ob) {
    console.log('Book changed...');
    let selectedBook = ob.value;
    console.log(selectedBook);
  }
  onFormSubmit() {
    this.bookService.saveBook(this.bookForm.value);
    this.resetForm();
  }
  resetForm() {
    this.filteredBooks = [];
    this.bookForm.reset();
  }
}