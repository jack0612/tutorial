import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  allCoursesLoaded,
  getAllCourses,
  courseLoaded,
  courseRequested, lessonsPageCancelled, lessonsPageLoaded,
  lessonsPageRequested
} from '../actions/ngrx-entity.actions';
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { CoursesService } from '../../services/course.service';

import { select, Store } from '@ngrx/store';

@Injectable()
export class ngrxEntityEffects {

  constructor(private actions$: Actions, private coursesService: CoursesService,
    private store: Store) {

  }

  loadCourse$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(courseRequested),
        switchMap(action => this.coursesService.findCourseById(action.courseId)
          .pipe(
            map(course => courseLoaded({ course }))
          )
        )
      )
  );

  loadAllCourses$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(getAllCourses),
        //withLatestFrom(this.store.pipe(select(allCoursesLoaded))),
        //filter(([action, allCoursesLoaded]) => !allCoursesLoaded),
        switchMap(action => this.coursesService.findAllCourses()
          .pipe(
            map(courses => allCoursesLoaded({ courses }))
          )
        )
      )
  );

  /*
 
  loadAllCourses$ = this.actions$
    .pipe(
      ofType<AllCoursesRequested>(CourseActionTypes.AllCoursesRequested),
      withLatestFrom(this.store.pipe(select(allCoursesLoaded))),
      filter(([action, allCoursesLoaded]) => !allCoursesLoaded),
      mergeMap(() => this.coursesService.findAllCourses()),
      map(courses => new AllCoursesLoaded({courses}))
    );


 
  loadLessonsPage$ = this.actions$
    .pipe(
      ofType<LessonsPageRequested>(CourseActionTypes.LessonsPageRequested),
      mergeMap(({payload}) =>
              this.coursesService.findLessons(payload.courseId,
                          payload.page.pageIndex, payload.page.pageSize)
                .pipe(
                  catchError(err => {
                    console.log('error loading a lessons page ', err);
                    this.store.dispatch(new LessonsPageCancelled());
                    return of([]);
                  })
                )

      ),
      map(lessons => new LessonsPageLoaded({lessons}))
    );

*/



}









