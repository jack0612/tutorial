import { Injectable } from '@angular/core';
import { Course } from './course'

const Courses: Course[] = [
         {"name": "Angular 7", "category": "Angular"},
		 {"name": "Node Js", "category": "Node js"},
		 {"name": "Angular 6", "category": "Angular"},
		 {"name": "Sql Server 2008 r2", "category": "Sql Server"},
		 {"name": "Angular 5", "category": "Angular"},
		 {"name": "Angular 4", "category": "Angular"},
		 {"name": "Html 5", "category": "Html"},	
		 {"name": "Angular 2", "category": "Angular"},	 
      ];

@Injectable()
export class CourseService {
	getAllCourses(): Course[] {
		return Courses;
	}
}