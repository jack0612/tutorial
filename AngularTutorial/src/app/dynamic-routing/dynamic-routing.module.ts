import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES, RouterModule, Routes } from '@angular/router';
function getMillis(hours: number) {
  return hours * 60 * 60 * 100;
}
@Component({
  selector: 'home',
  template: 'home component ',
})
export class HomeComponent { }

@Component({
  selector: 'notFound',
  template: 'notFound component ',
})
export class NotFoundComponent { }

@Component({
  selector: 'day',
  template: 'day component ',
})
export class DayComponent { }

@Component({
  selector: 'night',
  template: 'night component ',
})
export class NightComponent { }

@Component({
  selector: 'topsecreat',
  template: 'topSecreat component ',
})
export class TopSecretComponent { }



//https://levelup.gitconnected.com/angular-dynamic-routing-299c04ca75b1

const standardRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: () => {
        let routes: Routes = [];
        const currentTime = new Date().getTime();

        if (currentTime < getMillis(6) || currentTime > getMillis(18)) {
          routes.push({
            path: 'night',
            component: NightComponent
          });
        }
        else {
          routes.push({
            path: 'day',
            component: DayComponent
          });
        }

        if (Math.random() < 0.5) {
          routes.push({
            path: 'secret',
            component: TopSecretComponent
          });
        }

        return [
          ...routes,
          ...standardRoutes
        ];
      },
      multi: true
    }
  ]
})
export class DynamicRoutingModule { }
