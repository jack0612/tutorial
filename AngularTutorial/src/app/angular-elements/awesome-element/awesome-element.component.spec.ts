import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeElementComponent } from './awesome-element.component';

describe('AwesomeElementComponent', () => {
  let component: AwesomeElementComponent;
  let fixture: ComponentFixture<AwesomeElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
