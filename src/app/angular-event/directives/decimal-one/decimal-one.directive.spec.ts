import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DecimalOneDirective } from './decimal-one.directive';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppUtil } from "../../../snap-ship/utils/app-util";

@Component({
    template: `
    <form [formGroup]="formGroup">
        <input type="text" formControlName="length" decimalOne>
    </form>
    `
})

class TestAllowDecimalOneOnly {
    formGroup: FormGroup;
    constructor(private fb: FormBuilder) {
        this.formGroup = fb.group({
            length: ''
        })
    }
}

describe('Directive: decimalOne', () => {
    let component: TestAllowDecimalOneOnly;
    let fixture: ComponentFixture<TestAllowDecimalOneOnly>;
    let inputEl: DebugElement;
    let decimalSeparator = '.';
    const coff = 10;

    function validateNumber(coff: number, inputElement, decimalSeparator) {
        let isInvalid = AppUtil.isInvalidNumber(inputElement.value, decimalSeparator);
        let value = 0;
        if (!isInvalid) {
            value = Number(inputElement.value);
            value = Math.round(value * coff) / coff;
        }
        inputElement.value = value.toString();
    }
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DecimalOneDirective, TestAllowDecimalOneOnly],
            imports: [FormsModule, ReactiveFormsModule]
        }).compileComponents();

        fixture = TestBed.createComponent(TestAllowDecimalOneOnly);
        component = fixture.componentInstance;
        inputEl = fixture.debugElement.query(By.css('input'));
    }));

    it('should allow one decimal value ( defaultPrevented true for invalid value )', () => {
        const event = new KeyboardEvent('keydown', {
            'key': '123.258', // invalid value
            cancelable: true
        });

        inputEl.nativeElement.dispatchEvent(event);
        expect(event.defaultPrevented).toBeTruthy();
    });

    it('should allow one decimal value ( defaultPrevented false for valid value )', () => {
        const event = new KeyboardEvent('keydown', {
            'key': '5.1', // valid value
            cancelable: true
        });

        inputEl.nativeElement.dispatchEvent(event);
        expect(event.defaultPrevented).toBeFalsy();
    });

    it('paste:123.258258 => 123.3', () => {
        let dataFransfer = new DataTransfer();
        const event = new ClipboardEvent('paste', {
          clipboardData: dataFransfer
        });
        event.clipboardData.setData('text/plain', '123.258258');
        inputEl.nativeElement.dispatchEvent(event);
        validateNumber(coff, inputEl.nativeElement, decimalSeparator);
        expect(inputEl.nativeElement.value).toBe('123.3');
      });
    
      it('paste:-6.258258 => 6.26', () => {
        let dataFransfer = new DataTransfer();
        const event = new ClipboardEvent('paste', {
          clipboardData: dataFransfer
        });
        event.clipboardData.setData('text/plain', '-6.258258');
        inputEl.nativeElement.dispatchEvent(event);
        validateNumber(coff, inputEl.nativeElement, decimalSeparator);
        expect(inputEl.nativeElement.value).toBe('6.3');
      });
    
      it('paste:     => 0', () => {
        let dataFransfer = new DataTransfer();
        const event = new ClipboardEvent('paste', {
          clipboardData: dataFransfer
        });
        event.clipboardData.setData('text/plain', '   ');
        inputEl.nativeElement.dispatchEvent(event);
        validateNumber(coff, inputEl.nativeElement, decimalSeparator);
        expect(inputEl.nativeElement.value).toBe('0');
      });
    
      it('paste: k.1k=>0.1', () => {
        let dataFransfer = new DataTransfer();
        const event = new ClipboardEvent('paste', {
          clipboardData: dataFransfer
        });
        event.clipboardData.setData('text/plain', '  k.1k ');
        inputEl.nativeElement.dispatchEvent(event);
        validateNumber(coff, inputEl.nativeElement, decimalSeparator);
        expect(inputEl.nativeElement.value).toBe('0.1');
      });

});
