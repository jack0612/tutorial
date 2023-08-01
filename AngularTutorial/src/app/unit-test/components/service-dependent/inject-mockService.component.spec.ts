import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDependentComponent, UserService } from './service-dependent.component';

class MockUserService {
  isLoggedIn = true;
  user = { name: 'Test User'};
}
//https://dev.to/coly010/unit-testing-angular-services-1anm
//const userServiceSpy = jasmine.createSpyObj<UserService>('UserService', ['getActiveUser']);
describe('ServiceDependentComponent', () => {
  let component: ServiceDependentComponent;
  let fixture: ComponentFixture<ServiceDependentComponent>;
  let userService:UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDependentComponent ],
      providers:[
        { provide: UserService, useClass: MockUserService }
        /*
         {
      provide: UserService,
      useValue: userServiceSpy
    }
        */
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDependentComponent);
    component = fixture.componentInstance;
    // TestBed.inject() only works when Angular injects the component with the service instance in the test's root injector.
    userService = TestBed.inject(UserService);
    //otherwise use
    //userService = fixture.debugElement.injector.get(UserService);
    //see https://angular.io/guide/testing-components-scenarios#component-override
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should welcome logged in user after Angular calls ngOnInit', () => {
    component.ngOnInit();
    /*
    userServiceSpy.getActiveUser.and.returnValue({ id: 'test', name: 'test' });
    */
    expect(component.welcome).toContain(userService.user.name);
  });

  it('should ask user to log in if not logged in after ngOnInit', () => {
    userService.isLoggedIn = false;
    component.ngOnInit();
    expect(component.welcome).not.toContain(userService.user.name);
    expect(component.welcome).toContain('log in');
  });
});
