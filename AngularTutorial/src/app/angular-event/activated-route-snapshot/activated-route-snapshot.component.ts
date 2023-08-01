import { Component, OnInit } from '@angular/core';
//https://www.geekboots.com/story/difference-between-activatedroute-and-activatedroutesnapshot-in-angular
/*
Use the Snapshot if you only need the initial value of the parameter once during the component's initialization, 
and don't expect the URL to change while the user is still on that same component.
*/
@Component({
  selector: 'app-activated-route-snapshot',
  templateUrl: './activated-route-snapshot.component.html',
  styleUrls: ['./activated-route-snapshot.component.scss']
})
export class ActivatedRouteSnapshotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
