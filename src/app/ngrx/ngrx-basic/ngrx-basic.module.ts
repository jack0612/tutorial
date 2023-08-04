import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgrxBasicComponent } from './ngrx-dispatch-reducer-effect-sequence.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from './book-list/book-list.component';
import { EffectsModule } from '@ngrx/effects';
import { ngrxBasicReducers } from './store/ngrx-basic.reducer'
import { BooksEffects } from './store/books.effects'


@NgModule({
  declarations: [
    NgrxBasicComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    //StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    StoreModule.forFeature('ngrxBasic', ngrxBasicReducers),
    EffectsModule.forFeature([BooksEffects]),
    HttpClientModule,
  ],
  exports: [
    NgrxBasicComponent
  ]
})
export class NgrxBasicModule { }
