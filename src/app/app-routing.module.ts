import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlexComponent } from './flex/flex.component';

import { MatCustomControlParentComponent } from './material/mat-custom-control/mat-custom-control-parent/mat-custom-control-parent.component';

import { ScrollComponent } from './scroll/scroll.component';
import { AngularEventComponent } from './angular-event/angular-event.component';
import { CustomControlComponent } from './custom-control/custom-control.component';
import { DomEventComponent } from './dom-event/dom-event.component';
import { MaterialComponent } from './material/material.component';
import { NestedRouterOutletParentComponent } from './nested-router-outlet/parent/parent.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { SnapShipComponent } from './snap-ship/snap-ship.component';
import { ChatRoomComponent } from './chat-room/chat-room.component'
import { RxjsComponent } from './rxjs/rxjs.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { A11yComponent } from './a11y/a11y.component';
import { CssComponent } from './css/css.component';
import { CdkComponent } from './cdk/cdk.component';
import { MercuryComponent } from './mercury/mercury.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { DesignPatternComponent } from './design-pattern/design-pattern.component';
import { AgmComponent } from './agm/agm.component';
import { DummyComponentComponent } from './dummy-component/dummy-component.component';
import { MyGoogleMapsComponent } from './google-maps/google-maps.component';
import { MyTypescriptComponent } from './my-typescript/my-typescript.component';
import { AngularElementsComponent } from './angular-elements/angular-elements.component'
import { MyEchartComponent } from './my-echart/my-echart/my-echart.component';

const routes: Routes = [
    { path: 'app-flex', component: FlexComponent },
    { path: 'angularEmenets', component: AngularElementsComponent },
    { path: 'designPattern', component: DesignPatternComponent },
    { path: 'dummy', component: DummyComponentComponent },
    { path: 'google-maps', component: MyGoogleMapsComponent },
    { path: 'agm', component: AgmComponent },
    { path: 'NestedForm', component: NestedFormComponent },

    { path: 'AngularEvent', component: AngularEventComponent },

    { path: 'custom-control', component: CustomControlComponent },

    { path: 'material', component: MaterialComponent },
    { path: 'dom-event', component: DomEventComponent },
    { path: 'bootstrap', component: BootstrapComponent },
    { path: 'scroll', component: ScrollComponent },
    { path: 'chatRoom', component: ChatRoomComponent },
    { path: 'SnapShip', component: SnapShipComponent },
    { path: 'Rxjs', component: RxjsComponent },
    { path: 'mat-custom-control', component: MatCustomControlParentComponent },

    { path: 'NestedRouterOutlet', component: NestedRouterOutletParentComponent },
    { path: 'ngrx', component: NgrxComponent },
    { path: 'a11y', component: A11yComponent },
    { path: 'css', component: CssComponent },
    { path: 'cdk', component: CdkComponent },
    { path: 'mercury', component: MercuryComponent },
    { path: 'typescript', component: MyTypescriptComponent },
    { path: 'chart', component: MyEchartComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
