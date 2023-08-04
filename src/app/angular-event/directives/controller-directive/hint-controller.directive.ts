//https://indepth.dev/posts/1443/how-we-make-our-base-components-more-flexible-controllers-concept-in-angular

import { Directive, forwardRef, Input } from '@angular/core';

import { TuiHintModeT } from './hint-mode';
//import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TUI_HINT_CONTROLLER } from './hint-controller.token';
import { TuiController } from './tui-controller';
import { TuiDirection } from './direction'
// TODO: v2.0 use in Charts
@Directive({
  selector: '[tuiHintContent]',
  providers: [
    {
      provide: TUI_HINT_CONTROLLER,
      useExisting: forwardRef(() => TuiHintControllerDirective),
    },
  ],
})
export class TuiHintControllerDirective extends TuiController {
  // TODO: Remove null in 3.0
  @Input('tuiHintContent')
  content: any= null;
  //content: PolymorpheusContent | null = null;

  @Input('tuiHintDirection')

  direction: TuiDirection = 'bottom-left';

  @Input('tuiHintMode')

  mode: TuiHintModeT | null = null;

  @Input('tuiHintShowDelay')

  showDelay = 500;

  @Input('tuiHintHideDelay')

  hideDelay = 200;
}
