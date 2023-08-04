import { Component, Inject, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControlDirective, FormControl, ControlContainer, NgControl, NgModel, FormControlName, FormGroupDirective } from '@angular/forms';
import { ControlValueAccessorConnector } from './cva-connector'
import { tap } from 'rxjs/operators';
//https://medium.com/angular-in-depth/dont-reinvent-the-wheel-when-implementing-controlvalueaccessor-a0ed4ad0fafd

@Component({
  selector: 'resettable-input',
  styleUrls: ['./resettable-input.component.scss'],
  template: `
  <input type="text" [formControl]="control" [ngClass]="errors? ' redoutline' : '' ">
  <button (click)="clearInput()">clear</button>
`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ResettableInputComponent,
    multi: true
  }]

})

/*
https://unicorn-utterances.com/posts/angular-components-control-value-accessor/
export class ResettableInputComponent extends ControlValueAccessor {
constructor(
    @Optional() @Self() public ngControl: NgControl,
    private _changeDetector: ChangeDetectorRef
  ) {
    if (ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      ngControl.valueAccessor = this;
    }
  }
}
...
*/


//or


export class ResettableInputComponent extends ControlValueAccessorConnector {



  constructor(@Inject(Injector) injector: Injector,
    //private control: NgControl  //could not use NgControl, otherwise error : Circular dep for ResettableInputComponent
  ) {
    super(injector);
  }



  clearInput() {
    this.control.setValue('');
  }




  //class FormControlDirective extends NgControl implements OnChanges
  //https://levelup.gitconnected.com/angular-get-control-in-controlvalueaccessor-b7f09a485fba
  ngOnInit(): void {
    this.setComponentControl();
  }

  injectedControl;
  private setComponentControl(): void {
    const injectedNgControl = this.injector.get(NgControl);

    switch (injectedNgControl.constructor) {
      case NgModel: {
        const { control, update } = injectedNgControl as NgModel;

        this.injectedControl = control;

        this.injectedControl.valueChanges
          .pipe(
            tap((value) => update.emit(value)),

          )
          .subscribe();
        break;
      }
      case FormControlName: {
        this.injectedControl = this.injector.get(FormGroupDirective).getControl(injectedNgControl as FormControlName);
        console.log('injectedNgControl', this.injectedControl)
        break;
      }
      default: {
        this.injectedControl = (injectedNgControl as FormControlDirective).form as FormControl;
        break;
      }
    }
  }
}
