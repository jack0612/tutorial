import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Lesson } from '../../model/lesson.model';
import { lessonsPageCancelled, lessonsPageLoaded, lessonsPageRequested } from '../actions/ngrx-entity.actions';





export interface ILessonsState extends EntityState<Lesson> {
    loading: boolean;
}

function sortByCourseAndSeqNo(l1: Lesson, l2: Lesson) {
    const compare = l1.courseId - l2.courseId;
    if (compare != 0) {
        return compare;
    }
    else {
        return l1.seqNo - l2.seqNo;
    }
}

export const adapter: EntityAdapter<Lesson> =
    createEntityAdapter<Lesson>({
        sortComparer: sortByCourseAndSeqNo
    });


const initialLessonsState = adapter.getInitialState({
    loading: false
});

const _reducer = createReducer(
    initialLessonsState,
    on(lessonsPageCancelled, (state, action) => {
        return {
            ...state,
            loading: false
        };
    }),
    on(lessonsPageRequested, (state, action) => {
        return {
            ...state,
            loading: true
        };
    }),
    on(lessonsPageLoaded, (state, action) => {
        return adapter.addMany(action.lessons, { ...state, loading: false });
    })
)



export function lessonReducer(state: ILessonsState = initialLessonsState, action: Action) {
    return _reducer(state, action);
  }
  


export const {
    selectAll,
    selectEntities,
    selectIds,
    selectTotal

} = adapter.getSelectors();


