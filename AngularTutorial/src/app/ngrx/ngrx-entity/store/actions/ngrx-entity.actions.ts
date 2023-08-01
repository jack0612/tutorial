import { createAction, props } from '@ngrx/store';
import { Course } from '../../model/course.model';
import { Update } from '@ngrx/entity';
import { Lesson } from '../../model/lesson.model';


export enum CourseActionTypes {
  CourseRequested = '[View Course Page] Course Requested',
  CourseLoaded = '[Courses API] Course Loaded',
  GetAllCourses = '[Courses Home Page] Get All Courses',
  AllCoursesLoaded = '[Courses API] All Courses Loaded',
  CourseSaved = '[Edit Course Dialog] Course Saved',
  LessonsPageRequested = '[Course Landing Page] Lessons Page Requested',
  LessonsPageLoaded = '[Courses API] Lessons Page Loaded',
  LessonsPageCancelled = '[Courses API] Lessons Page Cancelled'
}

export interface PageQuery {
  pageIndex: number;
  pageSize: number;
}


export const lessonsPageRequested = createAction(
  CourseActionTypes.LessonsPageRequested,
  props<{ courseId: number, page: PageQuery }>()
);

export const lessonsPageLoaded = createAction(
  CourseActionTypes.LessonsPageLoaded,
  props<{ lessons: Lesson[] }>()
);

export const lessonsPageCancelled = createAction(
  CourseActionTypes.LessonsPageCancelled
);

export const courseRequested = createAction(
  CourseActionTypes.CourseRequested,
  props<{ courseId: number }>()
);

export const courseLoaded = createAction(
  CourseActionTypes.CourseLoaded,
  props<{ course: Course }>()
);

export const getAllCourses = createAction(
  CourseActionTypes.GetAllCourses
);

export const allCoursesLoaded = createAction(
  CourseActionTypes.AllCoursesLoaded,
  props<{ courses: Course[] }>()
)

export const courseSaved = createAction(
  CourseActionTypes.CourseSaved,
  props<{ course: Update<Course> }>()
);




