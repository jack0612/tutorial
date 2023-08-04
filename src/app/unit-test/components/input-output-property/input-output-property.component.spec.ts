
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {DashboardHeroComponent, Hero} from './input-output-property.component'
import { Component } from '@angular/core';

@Component({
  template: `
    <dashboard-hero
      [hero]="hero" (selected)="onSelected($event)">
    </dashboard-hero>`
})
class TestHostComponent {
  hero: Hero = {id: 42, name: 'Test Name'};
  selectedHero: Hero;
  onSelected(hero: Hero) {
    this.selectedHero = hero;
  }
}

describe('DashboardHeroComponent when inside a test host', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let heroElement: HTMLElement;
  let heroDe;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({declarations: [DashboardHeroComponent, TestHostComponent]})
        .compileComponents();
  }));

  beforeEach(() => {
    // create TestHostComponent instead of DashboardHeroComponent
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    heroElement = fixture.nativeElement.querySelector('.hero');
    heroDe=fixture.debugElement.query(By.css('hero'));
    fixture.detectChanges();  // trigger initial data binding
  });

  it('should display hero name', () => {
    const expectedPipedName = testHost.hero.name.toUpperCase();
    expect(heroElement.textContent).toContain(expectedPipedName);
  });

  it('should raise selected event when clicked', () => {
    heroElement.click();//same as  heroElement.dispatchEvent(new Event('click'));
                        //alse same as heroDe.triggerEventHandler('click', null);
    // selected hero should be the same data bound hero
    expect(testHost.selectedHero).toBe(testHost.hero);
  });

   
});

////// Test Host Component //////




 
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
