import { Component, Injectable, OnInit } from '@angular/core';
import { of } from 'rxjs';

export class User {
  id: number;
  name: string;
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
@Injectable({ providedIn: 'root' })
export class UserService {
  isLoggedIn;
  user: User;
  getUsers() {
    return of(null);
  }
}

@Component({
  selector: 'app-service-dependent',

})
export class ServiceDependentComponent implements OnInit {

  welcome: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.welcome = this.userService.isLoggedIn ?
      'Welcome, ' + this.userService.user.name : 'Please log in.';
  }
}
