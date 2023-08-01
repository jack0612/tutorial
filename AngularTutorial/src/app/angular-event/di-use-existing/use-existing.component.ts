import { Component, Inject, Injectable, InjectionToken, Injector, OnInit } from '@angular/core';
import { Angular6Service } from './Angular6.service';
import { Angular7Service } from './Angular7.service';

import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
interface MyInterface {
  test: boolean;
}
//https://angular.io/api/core/inject
//https://stackblitz.com/edit/angular-2fqggh?file=src%2Fapp%2Fapp.component.ts
//https://amitgharat.wordpress.com/2019/10/26/wth-is-injection-token/
//https://netbasal.com/the-hidden-power-of-injectiontoken-factory-functions-in-angular-d42d5575859b
type ActiveThemeProvider = Observable<string>;

@Injectable({
  providedIn: 'root'
})
class ThemeService {
  private theme = new Subject<string>();
  theme$: ActiveThemeProvider = this.theme.asObservable();

  setTheme(theme: string) {
    this.theme.next(theme);
  }
}

const ACTIVE_THEME = new InjectionToken<ActiveThemeProvider>('Active theme', {
  factory() {
    return inject(ThemeService).theme$;
  }
});

//@Inject, Injector, inject, InjectionToken,
@Component({
  selector: 'app-use-existing',
  providers: [
    Angular7Service,
    { provide: Angular6Service, useClass: Angular7Service }
  ],
  template: `
     <h3>Currently I work on {{CourseName}} </h3>
`
})
export class UseExistingComponent implements OnInit {
  CourseName: string;
  constructor(private courseService: Angular6Service,
    @Inject(ACTIVE_THEME) public theme$: ActiveThemeProvider) { }


  ngOnInit() {
    this.CourseName = this.courseService.CourseName;//will display Angular 7
    const token = new InjectionToken<MyInterface>('SomeToken')
    const injector = Injector.create({ providers: [{ provide: token, useValue: "abcd" }] });
    var myInterface = injector.get(token);
    //console.log('token', token);
    //console.log('injector', injector);
    //console.log('--myInterface', myInterface);//--myInterface abcd
  }
}
