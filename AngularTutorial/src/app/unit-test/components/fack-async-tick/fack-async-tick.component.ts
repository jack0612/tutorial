import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../service-dependent/service-dependent.component';

//https://codecraft.tv/courses/angular/unit-testing/asynchronous/
//https://medium.com/@alariclg/how-to-simply-test-observable-asynchronous-subscription-in-angular-dd278447e93
@Component({
  selector: 'app-fack-async-tick',
  templateUrl: './fack-async-tick.component.html',
  styleUrls: ['./fack-async-tick.component.scss']
})
export class FackAsyncTickComponent implements OnInit {
  private _userService: UserService;
  private _users: Array<User>;
  private _loading: boolean;

  public constructor(userService: UserService) {
      this._userService = userService;
  }

  public get users(): Array<User> {
      return this._users;
  }

  public get loading(): boolean {
      return this._loading;
  }

  public ngOnInit(): void {
      this.getUsers();
  }

  private getUsers(): void {
      this._loading = true;
      console.log('0000000000000000000000000')
      this._userService.getUsers().subscribe(users => {
        console.log('111111111111,users',users)
          this._loading = false;
          this._users = users;
      });
  }
}
