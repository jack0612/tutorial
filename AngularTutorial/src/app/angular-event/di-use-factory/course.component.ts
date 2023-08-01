import { Component, OnInit, InjectionToken, Inject, Injector } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import { Prefered_Courses, preferredCoursesFactory } from './preferred-courses'

const Course_Book = new Course('Angular js', 'Angular');


@Component({
	selector: 'app-di-use-factory',
	providers: [
		CourseService,
		{ provide: Course, useValue: Course_Book },
		{ provide: Prefered_Courses, useFactory: preferredCoursesFactory(4), deps: [Course, CourseService] }
	],
	template: `
	  <h3>Preferred Courses</h3>
	  {{preferredCourses}}
	`
})
export class CourseComponent implements OnInit {
	constructor(@Inject(Prefered_Courses) public preferredCourses: string) { }

	ngOnInit() {
		
	}
}