import { Course } from '../../model/course.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Actions } from '@ngrx/effects';
import { Action, createReducer, on } from '@ngrx/store';
import { allCoursesLoaded, courseLoaded, courseSaved } from '../actions/ngrx-entity.actions';

export interface ICoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

export const adapter: EntityAdapter<Course> =
  createEntityAdapter<Course>();


export const initialCoursesState: ICoursesState = adapter.getInitialState({
  allCoursesLoaded: false
});


const _reducer = createReducer(
  initialCoursesState,
  on(courseLoaded, (state, action) => {
    return adapter.addOne(action.course, state)
  }),
  on(allCoursesLoaded, (state, action) => {
    return adapter.addMany(action.courses, { ...state, allCoursesLoaded: true })
  }),
  on(courseSaved, (state, action) => {
    return adapter.updateOne(action.course, state)
  })
)

export function courseReducer(state: ICoursesState = initialCoursesState, action: Action) {
  //console.log('999999999999 courseReducer', action)
  return _reducer(state, action);
}


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();








