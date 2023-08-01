import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestComponent } from './unit-test.component';
import { HeroService } from './hero.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
describe('UnitTestComponent', () => {
  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;

  beforeEach(async(() => {
    const heroServiceSpy = jasmine.createSpyObj<HeroService>(['getHeroes']);
    heroServiceSpy.getHeroes.and.returnValue(of([]));

    TestBed.configureTestingModule({
      declarations: [UnitTestComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: HeroService, useValue: heroServiceSpy
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
