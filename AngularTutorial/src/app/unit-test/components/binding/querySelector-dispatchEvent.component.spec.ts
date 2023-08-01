import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { BindingComponent } from './binding.component';

describe('BindingComponent', () => {
  let component: BindingComponent;
  let fixture: ComponentFixture<BindingComponent>;
  let h1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingComponent ],
      imports:[
        BrowserModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //Binding happens when Angular performs change detection.
  it('should display original title', () => {
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });

  it('should display a different test title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    expect(h1.textContent).toContain('Test Title');
  });

  xit('should convert hero name to Title Case', () => {
    
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('input');
    const nameDisplay: HTMLElement = hostElement.querySelector('span');
  
    // simulate user entering a new name into the input box
    nameInput.value = 'quick BROWN  fOx';
  
    // Dispatch a DOM event so that Angular learns of input value change.
    // In older browsers, such as IE, you might need a CustomEvent instead. See
    // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
    nameInput.dispatchEvent(new Event('input'));
  
    // Tell Angular to update the display binding through the title pipe
    fixture.detectChanges();
  
    expect(nameDisplay.textContent).toBe('Quick Brown  Fox');
  });
});
