import { Component, Inject, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControlDirective, FormControl, ControlContainer, NgControl, NgModel, FormControlName, FormGroupDirective } from '@angular/forms';
import { ControlValueAccessorConnector } from './cva-connector'
import { tap } from 'rxjs/operators';
//https://medium.com/angular-in-depth/dont-reinvent-the-wheel-when-implementing-controlvalueaccessor-a0ed4ad0fafd


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'cva-select',
  template: `


  <h4>Basic mat-select</h4>
<mat-form-field>
  <mat-label>Favorite food</mat-label>
  <mat-select  [formControl]="control">
    <mat-option *ngFor="let food of foods" [value]="food.value">
      {{food.viewValue}}
    </mat-option>
  </mat-select>
</mat-form-field>


`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CvaSelectComponent,
    multi: true
  }]

})



//or


export class CvaSelectComponent extends ControlValueAccessorConnector {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor(@Inject(Injector) injector: Injector,
    //private control: NgControl  //could not use NgControl, otherwise error : Circular dep for ResettableInputComponent
  ) {
    super(injector);
  }
 

 
}
