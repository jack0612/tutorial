import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { OverlaySpinnerComponent } from './overlay-spinner.component';
import { Overlay } from '@angular/cdk/overlay';
import { ORDER_ENTRY_IMPORTS } from '@shared/utils/test-utils';

describe('OverlaySpinnerComponent', () => {
  let component: OverlaySpinnerComponent;
  let fixture: ComponentFixture<OverlaySpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverlaySpinnerComponent],
      imports: [ORDER_ENTRY_IMPORTS],
      providers: [
        Overlay,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlaySpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should launchSpinnerAfterDeplay called', () => {
    const spy = spyOn(<any>component, 'launchSpinnerAfterDeplay');
    component.displaySpinner = true;
    component.ngOnChanges();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should launchSpinner and detach spinner', fakeAsync(() => {
    const spyDetach = spyOn((<any>component).overlayRef, 'detach');
    component.displaySpinner = true;
    component.ngOnChanges();
    fixture.detectChanges();
    tick(600);
    component.displaySpinner = false;
    component.ngOnChanges();
    fixture.detectChanges();
    expect(spyDetach).toHaveBeenCalledTimes(1);
  }));


});
