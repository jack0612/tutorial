import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Component({
  selector: 'app-http-request-cache',
  template:`
  <button (click)="refreshUserList()">Refresh User List</button>
  `
})
export class HttpRequestCacheComponent {

  constructor(private readonly userService: UserService) {}

  private sub = this.userService.getUserPoles().subscribe();


  refreshUserList(): void {
    this.userService.refreshData();
  }

}
