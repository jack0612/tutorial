//please read prefetch-on-hover.readme.md in this directory
import {
  Directive,
  HostListener,
  Input,
  OnChanges,

  SimpleChanges,
} from '@angular/core';


@Directive({
  selector: '[prefetchOnHover]'
})
export class PrefetchOnHoverDirective implements OnChanges {
  private _prefetched = false;

  @Input('prefetchOnHover') private _prefetchFunction: Function = null;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    let prefetchFunction = changes._prefetchFunction;
    if (prefetchFunction) {
      this._prefetchFunction = prefetchFunction.currentValue;
    }
  }


  @HostListener('mouseenter')
  prefetch() {
    if (this._prefetchFunction && !this._prefetched) {
      this._prefetchFunction();
      this._prefetched = true;
    }
  }
}
