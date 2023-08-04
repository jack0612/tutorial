import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[autofocus1]'
})
export class AutofocusDirective {
  @Input('autofocus1') private shouldAutofocus?: boolean = false;

  constructor(private host: ElementRef, private renderer: Renderer2) {
    console.log('---autofocus constructor')
  }

  ngOnChanges(changes: SimpleChanges) {
    let shouldAutofocus = changes.shouldAutofocus;
    console.log('--1shouldAutofocus', shouldAutofocus)
    if (shouldAutofocus && shouldAutofocus.currentValue) {
      console.log('--2shouldAutofocus', this.host.nativeElement)
      this.host.nativeElement.focus();
    }
  }

}