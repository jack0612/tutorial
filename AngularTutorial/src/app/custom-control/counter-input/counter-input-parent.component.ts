import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { createCounterRangeValidator } from './counter-input.component';
//https://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html


@Component({
  selector: 'counter-input-parent',
  template: `
  <form #form="ngForm">
      <counter-input name="counter1" ngModel></counter-input>
      <br/>
      <counter-input name="counter2" [ngModel]="outerCounterValue2"></counter-input>
      <br/>
      <counter-input name="counter3" [(ngModel)]="outerCounterValue3"
        [counterRangeMax]="maxValue"
        [counterRangeMin]="minValue"
      ></counter-input>
    </form>
    <p *ngIf="!form.valid">Counter is invalid!</p>
    <pre>{{ form.value | json }}</pre>
    <br/>
    outerCounterValue2:{{outerCounterValue2}}
    <br/>
    outerCounterValue3:{{outerCounterValue3}}


    <form [formGroup]="reactiveForm">
    <counter-input formControlName="counter4"></counter-input>
  </form>
  <p *ngIf="!reactiveForm.valid">Counter is invalid!</p>
  <pre>{{ reactiveForm.value | json }}</pre>
`,
})
export class CounterInputParentComponent {

  outerCounterValue2 = 2;  
  outerCounterValue3 = 3; 
  maxValue=10;
  minValue =0;
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      counter4: [4,[createCounterRangeValidator(10, 0)]]
    });
    this.reactiveForm.valueChanges.subscribe(  
      (values: any) => {  
        console.log('reactiveForm changed to:', values);  
      }
    );
    this.reactiveForm.get('counter4').valueChanges.subscribe(  
      (value: any) => {  
        console.log('counter4 changed to:', value);  
      }
    );
    
  }
}