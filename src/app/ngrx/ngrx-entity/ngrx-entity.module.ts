import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxEntityComponent } from './ngrx-entity.component';
import { CoursesService } from './services/course.service'
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ngrxEntityEffects } from './store/effects/ngrx-entity.effects';
import { courseReducer } from './store/reducer/ngrx-entity-course.reducer';
import { lessonReducer } from './store/reducer/ngrx-entity-lesson.reducer';

@NgModule({
  declarations: [NgrxEntityComponent],
  imports: [
    CommonModule,
    BrowserModule,
    //StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    StoreModule.forFeature('ngrxEntity', { course: courseReducer, lesson: lessonReducer }),
    EffectsModule.forFeature([ngrxEntityEffects]),
    HttpClientModule,
  ],
  providers: [
    CoursesService
  ],
  exports:[
    NgrxEntityComponent
  ]
})
export class NgrxEntityModule { }
