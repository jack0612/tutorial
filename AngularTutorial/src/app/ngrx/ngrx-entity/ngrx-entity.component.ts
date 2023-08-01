import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllCourses } from './store/actions/ngrx-entity.actions';

//https://duncanhunter.gitbook.io/angular-and-ngrx/22.-use-entity-adapter
@Component({
  selector: 'app-ngrx-entity',
  templateUrl: './ngrx-entity.component.html',
  styleUrls: ['./ngrx-entity.component.scss']
})
export class NgrxEntityComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
    //console.log('999999999999 NgrxEntityComponent.ngOnInit')
    this.store.dispatch(getAllCourses())
  }

}
