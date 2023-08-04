import { ElementRef } from "@angular/core";
import { NgControl } from "@angular/forms";
import { AppUtil } from "../../../snap-ship/utils/app-util";

export class PasteListener {
    private inputElement: HTMLInputElement;
    private decimal: boolean = true;
    private hasDecimalPoint = false;
    private decimalSeparator = '.';
    private navigationKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight', 'Del', 'Delete'];

    constructor(el: ElementRef) {
        this.inputElement = el.nativeElement;
    }

    onKeyDown(event: KeyboardEvent, regex: RegExp) {
        if (
            this.navigationKeys.indexOf(event.key) > -1 ||      // Allow: navigation keys: backspace, delete, arrows etc.
            (event.key === 'a' && event.ctrlKey === true) || // Allow: Ctrl+A
            (event.key === 'c' && event.ctrlKey === true) || // Allow: Ctrl+C
            (event.key === 'v' && event.ctrlKey === true) || // Allow: Ctrl+V
            (event.key === 'x' && event.ctrlKey === true) || // Allow: Ctrl+X
            (event.key === 'a' && event.metaKey === true) || // Allow: Cmd+A (Mac)
            (event.key === 'c' && event.metaKey === true) || // Allow: Cmd+C (Mac)
            (event.key === 'v' && event.metaKey === true) || // Allow: Cmd+V (Mac)
            (event.key === 'x' && event.metaKey === true)    // Allow: Cmd+X (Mac)
        ) {
            return;
        }
        const current: string = this.inputElement.value;
        const position = this.inputElement.selectionStart;
        const next: string = [current.slice(0, position), event.key == 'Decimal' ? '.' : event.key, current.slice(position)].join('');
        if (next && !String(next).match(regex)) {
            event.preventDefault();
        }
    }

    //maxLength attribute has been  considered when pasting
    onPaste(event: ClipboardEvent, ngControl: NgControl, coff: number): void {
        let pastedInput: string;
        if (window['clipboardData']) {
            // Browser is IE
            pastedInput = window['clipboardData'].getData('text');
        } else if (event.clipboardData && event.clipboardData.getData) {
            // Other browsers
            pastedInput = event.clipboardData.getData('text/plain');
        }
        this.pasteData(pastedInput);
        if (this.inputElement.value != null && ngControl && ngControl.control && ngControl.control.parent && ngControl.name) {
            let isInvalid = AppUtil.isInvalidNumber(this.inputElement.value, this.decimalSeparator);
            let value = 0;
            if (!isInvalid) {
                value = Number(this.inputElement.value);
                value = Math.round(value * coff) / coff;
            }
            this.inputElement.value = value.toString();
            ngControl.control.parent.get(ngControl.name.toString()).setValue(value);
        }
        event.preventDefault();
    }

    private pasteData(pastedContent: string): void {
        const sanitizedContent = this.sanitizeInput(pastedContent);
        const pasted = document.execCommand('insertText', false, sanitizedContent);
        if (!pasted) {
            if (this.inputElement.setRangeText) {
                const { selectionStart: start, selectionEnd: end } = this.inputElement;
                this.inputElement.setRangeText(sanitizedContent, start, end, 'end');
                // Angular's Reactive Form relies on "input" event, but on Firefox, the setRangeText method doesn't trigger it
                // so we have to trigger it ourself.
                if (typeof window['InstallTrigger'] !== 'undefined') {
                    this.inputElement.dispatchEvent(new Event('input', { cancelable: true }));
                }
            } else {
                // Browser does not support setRangeText, e.g. IE
                this.insertAtCursor(this.inputElement, sanitizedContent);
            }
        }
        if (this.decimal) {
            this.hasDecimalPoint = this.inputElement.value.indexOf(this.decimalSeparator) > -1;
        }
    }

    private insertAtCursor(myField: HTMLInputElement, myValue: string): void {
        const startPos = myField.selectionStart;
        const endPos = myField.selectionEnd;

        myField.value =
            myField.value.substring(0, startPos) +
            myValue +
            myField.value.substring(endPos, myField.value.length);

        const pos = startPos + myValue.length;
        myField.focus();
        myField.setSelectionRange(pos, pos);

        this.triggerEvent(myField, 'input');
    }

    private triggerEvent(el: HTMLInputElement, type: string): void {
        if ('createEvent' in document) {
            // modern browsers, IE9+
            const e = document.createEvent('HTMLEvents');
            e.initEvent(type, false, true);
            el.dispatchEvent(e);
        }
    }

    private sanitizeInput(input: string): string {
        let result = '';
        if (this.decimal && this.isValidDecimal(input)) {
            const regex = new RegExp(`[^0-9${this.decimalSeparator}]`, 'g');
            result = input.replace(regex, '');
        } else {
            result = input.replace(/[^0-9]/g, '');
        }

        const maxLength = this.inputElement.maxLength;
        if (maxLength > 0) {
            // the input element has maxLength limit
            const allowedLength = maxLength - this.inputElement.value.length;
            result = allowedLength > 0 ? result.substring(0, allowedLength) : '';
        }
        return result;
    }

    private isValidDecimal(string: string): boolean {
        if (!this.hasDecimalPoint) {
            return string.split(this.decimalSeparator).length <= 2;
        } else {
            // the input element already has a decimal separator
            const selectedText = this.getSelection();
            if (selectedText && selectedText.indexOf(this.decimalSeparator) > -1) {
                return string.split(this.decimalSeparator).length <= 2;
            } else {
                return string.indexOf(this.decimalSeparator) < 0;
            }
        }
    }

    private getSelection(): string {
        return this.inputElement.value.substring(
            this.inputElement.selectionStart,
            this.inputElement.selectionEnd
        );
    }
}