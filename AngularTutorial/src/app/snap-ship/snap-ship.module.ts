import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnapShipComponent } from './snap-ship.component';
import { FormErrorDirective } from './common/directives/form-error.directive';
import { PrefetchOnValueChangesDirective } from './common/directives/prefetch-on-value-changes.directive';
import { FormErrorTestComponent } from './test/form-error-test/form-error-test.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { CustomErrorHandler } from './ship-common/ship-common-error-handler'
import { PickupComponent } from './shipment/pickup/pickup.component'
import { TranslateModule } from '@ngx-translate/core';
import { PickupService } from './common/services/pickup.service'
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { PickupEffects } from './store/effects/pickup.effects';
import { reducers } from './store';
import { PrefetchOnHoverDirective } from './common/directives/prefetch-on-hover.directive'
import { PrefetchTestComponent } from './test/prefetch-test/prefetch-test.component'
@NgModule({
  declarations: [
    SnapShipComponent,
    FormErrorDirective,
    PrefetchOnValueChangesDirective,
    PrefetchOnHoverDirective,
    FormErrorTestComponent,
    PrefetchTestComponent,
    PickupComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslateModule.forChild(),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true,
        strictActionTypeUniqueness: true,
        strictActionWithinNgZone: true
      }
    }),
    EffectsModule.forRoot([PickupEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

  ],
  exports: [
    SnapShipComponent,
    PickupComponent,

  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler
    },
    PickupService
  ]
})
export class SnapShipModule { }
