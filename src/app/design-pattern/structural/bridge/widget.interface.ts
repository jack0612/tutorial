import { InjectionToken } from '@angular/core'
export interface IWidget {
    load();
    refresh();
}

export const WIDGET = new InjectionToken<IWidget>('widget');