import { InjectionToken } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

export const Prefered_Courses = new InjectionToken<string>('course name');

export function preferredCoursesFactory(count: number) {
    return (myCourse: Course, courseService: CourseService): string => {
        return courseService
            .getAllCourses()
            .filter(course => course.category === myCourse.category)
            .map(course => course.name)
            .slice(0, Math.max(0, count))
            .join(' | ');
    };
};