import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';

import { TabTestComponent } from './cisco-tabs/tab-test/tab-test.component';
import { TabsComponent } from './cisco-tabs/tabs.component';
import { TabComponent } from './cisco-tabs/tab.component';
import { StructuralDirective } from './structural-directive/structural-directive.directive';
import { TestStructuralDirectiveComponent } from './structural-directive/test-structural-directive.component';
import { SdAuthorizedDirective } from './structural-directive/sd-authorized.directive';
import { ComponentFactoryResolverComponent } from './ComponentFactoryResolver/component-factory-resolver.component';
import { MessageComponent } from './ComponentFactoryResolver/message.component';
import { ViewContainerRefComponent } from './ViewContainerRef/view-container-ref.component';
import { ChangeDetectorRefComponent } from './ChangeDetectorRef/change-detector-ref.component';
import { CdfChildComponent } from './ChangeDetectorRef/change-detector-ref--child/cdf-child.component';
import { RouterEventComponent, RouterEventModule } from './router-event/router-event.component';
import { OnPropertyChangeComponent } from './decorator/propertyDecorator/on-property-change/on-property-change.component';
import { HelloComponent, TrackChangesComponent } from './decorator/methodDecorator/track-changes/track-changes.component';
import { PrefetchOnValueChangesComponent } from './decorator/methodDecorator/prefetch-on-value-changes/prefetch-on-value-changes.component'
import { StorageComponent } from './decorator/propertyDecorator/storage.component';
import { DigitalOnlyDirective } from './directives/digital-only/digital-only.directive';
import { DigitalOnlyComponent } from './directives/digital-only/digital-only.component';
import { SnapshipModalComponent } from '../angular-event/modal/modal.component';
import { ModalExampleComponent } from '../angular-event/modal/modal-example/modal-example.component';
import { DecimalOneDirective } from './directives/decimal-one/decimal-one.directive';
import { RefreshComponent } from './refresh/refresh.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { UrlGuardComponent } from './url-guard/url-guard.component';
import { ThrowErrorComponent } from './throw-error/throw-error.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LifeCycleChildComponent } from './life-cycle/life-cycle-child/life-cycle-child.component';
import { BComponent, ExpressionChangedComponent } from './expression-changed/expression-changed.component';
import { ActivatedRouteSnapshotComponent } from './activated-route-snapshot/activated-route-snapshot.component';
import { HttpRequestCacheComponent } from './decorator/methodDecorator/http-request-cache/http-request-cache.component';
import { CacheService } from '../angular-event/decorator/methodDecorator/http-request-cache/cache.service';
import { UserService } from '../angular-event/decorator/methodDecorator/http-request-cache/user.service';
import { UserApiService } from '../angular-event/decorator/methodDecorator/http-request-cache/user-api.service';
import { ViewPatternComponent } from './view-pattern/view-pattern.component';
import { ViewPatternExamplesModule } from './view-pattern/view-pattern-examples/view-pattern-examples.module';
import { HeadlessComponentComponent } from './headless-component/headless-component.component';
import { NgTemplateOutletSelectModule } from './ng-template-outlet-select/ng-template-outlet-select.module';
import { CallbackTemplateDirective } from './headless-component/callback-template.directive';
import { FileSelectComponent } from './headless-component/file-select.component';
import { CardItemDirective, CardOrListViewComponent, ListItemDirective, NgTemplateOutletUsageExampleComponent } from './ng-template-outlet-usage-example/ng-template-outlet-usage-example.component';
import { LetDirectiveComponent } from './directives/let-directive/let-directive.component';
import { LetDirective } from './directives/let-directive/let.directive';
import { SelfSaveDropdownComponent } from './self-save-dropdown/self-save-dropdown.component';
import { SelfSaveDirective } from './self-save-dropdown/self-save.directive';
import { ElementRefComponent } from './ElementRef/element-ref.component';
import { TuiDestroyService } from './directives/controller-directive/destroy.service'
import { AutofocusDirective } from './directives/autofocus.directive'
@NgModule({
  declarations: [
    TabTestComponent,
    TabsComponent,
    TabComponent,
    StructuralDirective,
    TestStructuralDirectiveComponent,
    SdAuthorizedDirective,
    ComponentFactoryResolverComponent,
    MessageComponent,
    ViewContainerRefComponent,
    ChangeDetectorRefComponent,
    CdfChildComponent,
    RouterEventComponent,
    OnPropertyChangeComponent,
    HelloComponent,
    TrackChangesComponent,
    PrefetchOnValueChangesComponent,
    StorageComponent,
    DigitalOnlyDirective,
    DigitalOnlyComponent,
    SnapshipModalComponent,
    ModalExampleComponent,
    DecimalOneDirective,
    RefreshComponent,
    NgTemplateOutletComponent,
    NgTemplateComponent,
    ViewChildComponent,
    UrlGuardComponent,
    ThrowErrorComponent,
    LifeCycleComponent,
    LifeCycleChildComponent,
    ExpressionChangedComponent,
    BComponent,
    ActivatedRouteSnapshotComponent,
    HttpRequestCacheComponent,
    ViewPatternComponent,
    HeadlessComponentComponent,
    CallbackTemplateDirective,
    FileSelectComponent,
    NgTemplateOutletUsageExampleComponent,
    CardOrListViewComponent, CardItemDirective, ListItemDirective,
    LetDirectiveComponent,
    LetDirective,
    SelfSaveDropdownComponent,
    SelfSaveDirective,
    AutofocusDirective,
    ElementRefComponent




  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterEventModule,
    ViewPatternExamplesModule,
    NgTemplateOutletSelectModule,


  ],
  exports: [
    TabTestComponent,
    TabsComponent,
    TabComponent,
    TestStructuralDirectiveComponent,
    ComponentFactoryResolverComponent,
    MessageComponent,
    ViewContainerRefComponent,
    ChangeDetectorRefComponent,
    CdfChildComponent,
    RouterEventComponent,
    RouterEventModule,
    OnPropertyChangeComponent,
    TrackChangesComponent,
    PrefetchOnValueChangesComponent,
    StorageComponent,
    DigitalOnlyComponent,
    SnapshipModalComponent,
    ModalExampleComponent,
    RefreshComponent,
    NgTemplateOutletComponent,
    NgTemplateComponent,
    ViewChildComponent,
    ThrowErrorComponent,
    LifeCycleComponent,
    LifeCycleChildComponent,
    ExpressionChangedComponent,
    HttpRequestCacheComponent,
    ViewPatternComponent,
    ViewPatternExamplesModule,
    NgTemplateOutletSelectModule,
    CallbackTemplateDirective,
    FileSelectComponent,
    HeadlessComponentComponent,
    NgTemplateOutletUsageExampleComponent,
    CardOrListViewComponent, CardItemDirective, ListItemDirective,
    LetDirectiveComponent,
    LetDirective,
    SelfSaveDropdownComponent,
    AutofocusDirective,
    ElementRefComponent




  ],
  entryComponents: [
    SnapshipModalComponent
  ],
  providers: [
    UserApiService,
    UserService,
    CacheService,
    TuiDestroyService
  ]
})
export class AngularEventModule { }
