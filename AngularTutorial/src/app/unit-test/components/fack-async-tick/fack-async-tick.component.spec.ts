import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User, UserService } from '../service-dependent/service-dependent.component';

import { FackAsyncTickComponent } from './fack-async-tick.component';
//https://codecraft.tv/courses/angular/unit-testing/asynchronous/
//https://www.digitalocean.com/community/tutorials/angular-testing-async-fakeasync
describe('FackAsyncTickComponent', () => {
  let component: FackAsyncTickComponent;
  let fixture: ComponentFixture<FackAsyncTickComponent>;
  let _userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FackAsyncTickComponent],
      providers: [
        UserService
      ]
    })
      .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FackAsyncTickComponent);
    component = fixture.componentInstance;
    component = fixture.componentInstance;
    _userService = TestBed.inject(UserService);
  }));

  it('On init users should be loaded', fakeAsync(() => {
    const user = new User(1,2);
    const spy1=spyOn(_userService, 'getUsers').and.returnValue(of([user]));


    // Trigger ngOnInit()
    fixture.detectChanges();

 
    expect(spy1).toHaveBeenCalled();


    // Simulates the asynchronous passage of time
    tick();

    expect(component.loading).toBeFalsy();
    expect(component.users).toEqual([user]);
  }));;
});
/*
1. async and whenStable
  // check the expected result when all asynchronous calls have ended using whenStable.
2. fakeAsync and tick. flush
flush()//A new utility called flush was introduced in Angular 4.2 and
//helps with that issue. It simulates the passage of time until the macrotask queue is empty.
// Macrotasks include things like setTimouts, setIntervals, and requestAnimationFrame.
*/

/*
element = fixture.nativeElement;      // to access DOM element
de = fixture.debugElement;            // test helper
expect(element.querySelector('h1').innerText).toBe('Hello World!');
expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Hello World!');
*/
/*
waitForAsync
The problem with waitForAsync/async is that we still have to introduce real waiting in our tests,
and this can make our tests very slow. fakeAsync comes to the rescue and helps to test asynchronous
code in a synchronous way.
*/