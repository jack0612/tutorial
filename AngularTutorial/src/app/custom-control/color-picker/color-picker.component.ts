import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, ViewChild, ElementRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as AColorPicker from 'a-color-picker';
//https://ordina-jworks.github.io/architecture/2020/08/15/angular-custom-control.html
@Component({
  selector: 'my-color-picker',
  template: `
    <div class="picker-icon" [class.disabled]="isDisabled" style="background: {{ color }}" (click)="openPicker()"></div>
    <div #pickerElement class="picker" acp-show-rgb="no"
     acp-show-hsl="no"
     acp-show-hex="no">
      <button *ngIf="open" type="button" (click)="closePicker()">close</button>
    </div>
  `,
  styles: [`
    .picker {
      display: flex;
      flex-direction: column-reverse;
      position: absolute;
    }

    .picker-icon {
      width: 1em;
      height: 1em;
      margin: 2px 0;
      border: 2px solid white;
      box-sizing: border-box;
      box-shadow: 0 0 1px 1px gray;
      border-radius: 50%;
    }

    .picker-icon.disabled {
      opacity: 0.5;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [     
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true
    }
  ]
})
export class ColorPickerComponent implements AfterViewInit, OnDestroy, ControlValueAccessor {

  open = false;
  color = '#fff000';
  isDisabled = false;
  private _picker = null;
  private get picker() {
    return this._picker ? this._picker[0] : null;
  }
  @ViewChild('pickerElement') pickerElement: ElementRef;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private ngControl: NgControl
  ) { 
    if (!!ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  ngAfterViewInit() {
    this.initializePicker();
    this.addChangeListener();
    this.ngControl.statusChanges.pipe(
      //takeUntil(this._destroyed$)
    ).subscribe(status => {
      console.log('The current status of the control is', status);
    });
  }

  ngOnDestroy() {
    this.removeChangeListener();
  }

  openPicker() {
    if (!this.open && !this.isDisabled) {
      this.picker.show();
      this.open = true;
    }
  }

  closePicker() {
    if (this.open) {
      this.picker.hide();
      this.open = false;
      this._onTouched();
    }
  }

  private initializePicker() {
    if (this.pickerElement) {
      this._picker = AColorPicker.from(this.pickerElement.nativeElement);
      this.picker.hide();
      this.picker.color = this.color;
    } else {
      throw Error('Picker could not be initialized');
    }
  }

  private addChangeListener() {
    this._picker.on('change', event => {
      this.color = event.color;
      this.changeDetectorRef.markForCheck();
      this._onChange(this.color);
    });
  }

  private removeChangeListener() {
    this._picker.off('change');
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    if (this.isDisabled) {
      this.closePicker();
    }
    this.changeDetectorRef.markForCheck();
  }

  writeValue(obj: any): void {
    if (this.picker) {
      this.picker.setColor(`${obj}`);
    } else {
      this.color = `${obj}`;
    }
  }

  private _onChange: (color: string) => void;
  private _onTouched: () => void;

  registerOnChange(fn: (color: string) => void): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

}