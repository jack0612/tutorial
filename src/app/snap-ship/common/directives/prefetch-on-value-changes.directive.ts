//please read prefetch-on-value-changes-readme.md in this directory
import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Self,
  SimpleChanges,
} from '@angular/core';
import { ControlContainer, FormGroup, NgControl } from '@angular/forms';


@Directive({
  selector: '[prefetchOnValueChanges]'
})
export class PrefetchOnValueChangesDirective implements OnChanges, OnInit, OnDestroy {
  @Input('prefetchOnValueChanges') private _prefetchFunction: Function = null;
  constructor(
    private _elementRef: ElementRef,
    private _controlContainer: ControlContainer,
    @Self() private _ngControl: NgControl
  ) {
    console.log('--ngControl', _ngControl)
    console.log('---_controlContainer', _controlContainer)
    console.log('---_elementRef', _elementRef)
  }

  ngOnChanges(changes: SimpleChanges) {
    let prefetchFunction = changes._prefetchFunction;
    if (prefetchFunction) {
      this._prefetchFunction = prefetchFunction.currentValue;
    }
  }

  ngOnInit() {
    if (this._prefetchFunction && this._ngControl) {
      let called = false;
      let subscription = this._ngControl.control.valueChanges.subscribe((value) => {
        if (!called) {
          this._prefetchFunction();
          called = true;
        }
        if (subscription) {
          subscription.unsubscribe();
          console.log('---subscription.unsubscribe')
        }
      });
    }
  }

  ngOnDestroy() { }
}
