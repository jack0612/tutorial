import {ChangeDetectorRef} from '@angular/core';
import {watch} from './watch'
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { TuiController } from './tui-controller';

export function watchedControllerFactory(
    controller: TuiController,
    changeDetectorRef: ChangeDetectorRef,
    destroy$: Observable<void>,
): TuiController {
    controller.change$.pipe(watch(changeDetectorRef), takeUntil(destroy$)).subscribe();

    return controller;
}