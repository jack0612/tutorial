import { Directive, HostListener, ElementRef, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { PasteListener } from './paste-listener';
//You can keep input type as text and use this directive
@Directive({
  selector: '[decimalOne]',
})
export class DecimalOneDirective extends PasteListener {
  // Input can start with ,/.
  private regex: RegExp = new RegExp(/^\d*[.]?\d{0,1}$/g); // Up to 1 decimal point

  constructor(private el: ElementRef, @Self() private ngControl: NgControl) {
    super(el);
  }

  @HostListener('keydown', ['$event'])
  _onKeyDown(event: KeyboardEvent) {
    this.onKeyDown(event, this.regex)
  }

  @HostListener('paste', ['$event'])
  _onPaste(event: ClipboardEvent) {
    this.onPaste(event, this.ngControl, 10);
  }
}
