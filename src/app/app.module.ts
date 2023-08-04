import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MaterialModule } from './material/material.module'
import { AppComponent } from './app.component';
import { FlexComponent } from './flex/flex.component';
import { FlexCenterTableComponent } from './flex/flex-center-table/flex-center-table.component';
import { MarginAutoComponent } from './flex/margin-auto/margin-auto.component';
import { Flex2Component } from './flex/flex2/flex2.component';
import { FlexBasisComponent } from './flex/flex-basis/flex-basis.component';
import { FlexLayoutComponent } from './flex/flex-layout/flex-layout.component';
import { FlexLayout2Component } from './flex/flex-layout2/flex-layout2.component';
import { ResponsiveCardGridComponent } from './flex/responsive-card-grid/responsive-card-grid.component'
import { FlexItemInitialWidthComponent } from './flex/flex-item-initial-width/flex-item-initial-width.component';

import { ChildInstanceModule } from './angular-event/child-instance/child-instance.module'
import { AppRoutingModule } from './app-routing.module';
import { HostbindingComponent } from './angular-event/hostbinding/hostbinding.component'
import { HostDirective } from './angular-event/hostbinding/host.directive';
import { CustomElementComponent } from './custom-control/custom-element/custom-element.component';
import { CustomElementInputComponent } from './custom-control/custom-element/custom-element-input/custom-element-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReusableFormControlComponent } from './custom-control/reusable-form-control/reusable-form-control.component';
import { TextFieldComponent } from './custom-control/reusable-form-control/text-field/text-field.component';
import { CounterInputComponent } from './custom-control/counter-input/counter-input.component';
import { CounterInputParentComponent } from './custom-control/counter-input/counter-input-parent.component';
import { RatingInputComponent } from './custom-control/rating-input/rating-input.component';
import { RatingInputParentComponent } from './custom-control/rating-input/rating-input-parent.component';
import { ColorPickerComponent } from './custom-control/color-picker/color-picker.component';
import { ColorPickerParentComponent } from './custom-control/color-picker/color-picker-parent.component';
import { SignupFormComponent } from './custom-control/signup-form/signup-form.component';
import { PasswordFormComponent } from './custom-control/signup-form/password-form/password-form.component';
import { ProfileFormComponent } from './custom-control/signup-form/profile-form/profile-form.component';
import { TextInputComponent } from './custom-control/text-input/text-input.component';
import { TextInputParentComponent } from './custom-control/text-input/text-input-parent/text-input-parent.component';
import { ValidationBorderModule } from './angular-event/NgControl/validation-border.module'
import { ValidationBorderParentModule } from './angular-event/NgControl/validation-border-parent.module';

import { MatCustomControlModule } from './material/mat-custom-control/mat-custom-control.module';
import { OnBlurComponent } from './dom-event/on-blur/on-blur.component';

import { FxLayoutNgclassComponent } from './flex/fx-layout-ngclass/fx-layout-ngclass.component';


import { BREAKPOINTS, DEFAULT_BREAKPOINTS, BreakPoint, BREAKPOINT } from '@angular/flex-layout';
import { ScrollElementComponent } from './scroll/scroll-element/scroll-element.component';
import { DocumentHeightComponent } from './scroll/document-height/document-height.component';
import { ScrollOffsetMaintainedComponent } from './scroll/scroll-offset-maintained/scroll-offset-maintained.component';
import { ScrollSmoothlyComponent } from './scroll/scroll-smoothly/scroll-smoothly.component';
import { ScrollToDivBottomComponent } from './scroll/scroll-to-div-bottom/scroll-to-div-bottom.component';
import { GuideComponent } from './scroll/guide/guide.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ScrollComponent } from './scroll/scroll.component';
import { ResponsiveNavigationModule } from './flex/responsive-navigation/responsive-navigation.module';
import { AngularEventComponent } from './angular-event/angular-event.component';
import { DomEventComponent } from './dom-event/dom-event.component';
import { CustomControlComponent } from './custom-control/custom-control.component';
import { CourseComponent } from './angular-event/di-use-factory/course.component'
import { UseExistingComponent } from './angular-event/di-use-existing/use-existing.component'
import { AgeRangeValidatorComponent } from './custom-control/custom-validator/age-range-validator/age-range-validator.component'
import { NgForTrackByComponent } from './angular-event/ngFor-trackBy/ng-for-track-by.component'
import { CrossFieldValidatorComponent } from './custom-control/custom-validator/cross-field-validator/cross-field-validator.component'
import { ThreeWaysToAlterValidatorComponent } from './angular-event/three-ways-to-alter-validator/three-ways-to-alter-validator.component';
import { NestedFormComponent } from './nested-form/nested-form.component'
import { NestedRouterOutletModule } from './nested-router-outlet/nested-router-outlet.module'
import { NestedFormModule } from './nested-form/nested-form.module'
import { AngularEventModule } from './angular-event/angular-event.module';
import { JackMaterialRoutingModule } from './material/jack-material-routing.module'
import { SnapShipModule } from './snap-ship/snap-ship.module'

import { ChatRoomModule } from './chat-room/chat-room.module';
import { RxjsModule } from './rxjs/rxjs.module';
import { PasswordConfirmValidatorComponent } from './custom-control/custom-validator/password-confirm-validator/password-confirm-validator.component'
import { EqualValidator } from './custom-control/custom-validator/equal-validator/equal-validator.directive'
import { TestEqualValidatorComponent } from './custom-control/custom-validator/equal-validator/test-equal-validator/test-equal-validator.component'

import { DomEventModule } from './dom-event/dom-event.module';
import { NgrxModule } from './ngrx/ngrx.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { JackA11yModule } from './a11y/a11y.module';
import { CssModule } from './css/css.module';
import { UnitTestModule } from './unit-test/unit-test.module';
import { CdkModule } from './cdk/cdk.module';
import { BackButtonDisableModule } from './back-button-disable.module';
import { PolymorpheusModule } from './polymorpheus/polymorpheus.module';
import { MercuryModule } from './mercury/mercury.module';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { DesignPatternModule } from './design-pattern/design-pattern.module';
import { AgmModule } from './agm/agm.module'
import { DummyComponentModule } from './dummy-component/dummy-component.module';
import { BlueButtonComponent } from './blue-button/blue-button.component';
import { FlexProjectComponent } from './flex/flex-project/flex-project.component';
import { FlexProject2Component } from './flex/flex-project2/flex-project2.component';
import { MyGoogleMapsModule } from './google-maps/google-maps.module';
import { MyTypescriptModule } from './my-typescript/my-typescript.module';
import { AngularElementsModule } from './angular-elements/angular-elements.module';
import { DynamicRoutingModule } from './dynamic-routing/dynamic-routing.module';
import { ResettableInputComponent } from './custom-control/resettable-input/resettable-input.component';
import { CvaSelectComponent } from './custom-control/resettable-input/cva-select.component';
import { CvaRadioGroupComponent} from './custom-control/resettable-input/cva-radio-group.component';
import { ResettableInputParentComponent } from './custom-control/resettable-input/resettable-input-parent/resettable-input-parent.component';
import {MyEchartModule } from './my-echart/my-echart.module'
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json?v=' + new Date().getTime());
}


const PRINT_BREAKPOINTS = [{
  alias: 'tb',
  suffix: 'tb',
  mediaQuery: 'screen and (max-width: 960px) and (min-width:1279px)', //same as md
  overlapping: false,
  priority: 1001 // Needed if overriding the default print breakpoint
}];

export const CustomBreakPointsProvider = {
  provide: BREAKPOINT,
  useValue: PRINT_BREAKPOINTS,
  multi: true
};
@NgModule({
  declarations: [
    AppComponent,
    FlexComponent,
    FlexCenterTableComponent,
    MarginAutoComponent,
    Flex2Component,
    FlexBasisComponent,
    FlexLayoutComponent,
    FlexLayout2Component,
    ResponsiveCardGridComponent,
    FlexItemInitialWidthComponent,
    HostbindingComponent,
    HostDirective,
    CustomElementComponent,
    CustomElementInputComponent,
    ReusableFormControlComponent,
    TextFieldComponent,
    CounterInputComponent,
    CounterInputParentComponent,
    RatingInputComponent,
    RatingInputParentComponent,
    ColorPickerComponent,
    ColorPickerParentComponent,
    SignupFormComponent,
    PasswordFormComponent,
    ProfileFormComponent,
    TextInputComponent,
    TextInputParentComponent,
    OnBlurComponent,

    FxLayoutNgclassComponent,
    ScrollElementComponent,
    DocumentHeightComponent,
    ScrollOffsetMaintainedComponent,
    ScrollSmoothlyComponent,
    ScrollToDivBottomComponent,
    GuideComponent,
    ScrollComponent,
    AngularEventComponent,
    DomEventComponent,
    CustomControlComponent,
    CourseComponent,
    UseExistingComponent,
    AgeRangeValidatorComponent,

    NgForTrackByComponent,
    CrossFieldValidatorComponent,
    ThreeWaysToAlterValidatorComponent,
    NestedFormComponent,
    PasswordConfirmValidatorComponent,
    EqualValidator,
    TestEqualValidatorComponent,
    BlueButtonComponent,
    FlexProjectComponent,
    FlexProject2Component,
    ResettableInputComponent,
    ResettableInputParentComponent,
    CvaSelectComponent,
    CvaRadioGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule.withConfig({ disableDefaultBps: false }, PRINT_BREAKPOINTS),
    ChildInstanceModule,
    ValidationBorderModule.forRoot({
      borderStyle: 'solid',
      borderWidth: '3px',
      colors: {
        VALID: 'green',
        INVALID: 'red',
        PENDING: 'yellow',
        DISABLED: 'silver'
      }
    }),
    ValidationBorderParentModule,

    MatCustomControlModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ResponsiveNavigationModule,
    NestedRouterOutletModule,
    NestedFormModule,
    AngularEventModule,
    JackMaterialRoutingModule,
    SnapShipModule,
    ChatRoomModule,
    RxjsModule,
    DomEventModule,
    NgrxModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true,
        strictActionTypeUniqueness: true,
        strictActionWithinNgZone: true
      }
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),


    NgrxModule,
    JackA11yModule,
    CssModule,
    UnitTestModule,
    CdkModule,
    BackButtonDisableModule.forRoot(),
    PolymorpheusModule,
    MercuryModule,
    BootstrapModule,
    DesignPatternModule,
    AgmModule,
    DummyComponentModule,
    MyGoogleMapsModule,
    MyTypescriptModule,
    AngularElementsModule,
    DynamicRoutingModule,
    MyEchartModule




  ],
  providers: [
    CustomBreakPointsProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
