import { Component, Inject, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControlDirective, FormControl, ControlContainer, NgControl, NgModel, FormControlName, FormGroupDirective } from '@angular/forms';
import { ControlValueAccessorConnector } from './cva-connector'
import { tap } from 'rxjs/operators';
//https://medium.com/angular-in-depth/dont-reinvent-the-wheel-when-implementing-controlvalueaccessor-a0ed4ad0fafd

@Component({
  selector: 'cva-radio-group',
  template: `
  <label id="example-radio-group-label">Pick your favorite season</label>
  <mat-radio-group
    aria-labelledby="example-radio-group-label"
    class="example-radio-group"
    [formControl]="control">
    <mat-radio-button class="example-radio-button" *ngFor="let season of seasons" [value]="season">
      {{season}}
    </mat-radio-button>
  </mat-radio-group>
  <div>Your favorite season is: {{control.value}}</div>
`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CvaRadioGroupComponent,
    multi: true
  }]

})

 

//or


export class CvaRadioGroupComponent extends ControlValueAccessorConnector {

  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor(@Inject(Injector) injector: Injector,
    //private control: NgControl  //could not use NgControl, otherwise error : Circular dep for ResettableInputComponent
  ) {
    super(injector);
  }

  
}
