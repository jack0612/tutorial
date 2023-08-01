import { Component, NgModule, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, Event, NavigationCancel, RouteConfigLoadEnd, RouteConfigLoadStart, RoutesRecognized, Routes, RouterModule, ActivationStart, ChildActivationStart } from '@angular/router';
 
//https://www.amadousall.com/angular-routing-how-to-display-a-loading-indicator-when-navigating-between-routes/
//https://www.bennadel.com/blog/3533-using-router-events-to-detect-back-and-forward-browser-navigation-in-angular-7-0-4.htm
//https://github.com/bennadel/JavaScript-Demos/tree/master/demos/router-retain-scroll-polyfill-angular7
import { SectionAComponent } from './section-a.component';
import { SectionBComponent } from './section-b.component';
import { SectionCComponent } from './section-c.component';
import { CanActivateSectionA } from './section-a.guard';
import { CanActivateSectionB } from './section-b.guard'

const routes: Routes = [
  {
    path: "AngularEvent/section-a",
    component: SectionAComponent,
    canActivate: [CanActivateSectionA],
  },
  {
    path: "AngularEvent/section-b",
    component: SectionBComponent,
    canActivate: [CanActivateSectionB],
  },
  {
    path: "AngularEvent/section-c",
    component: SectionCComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [CanActivateSectionA, CanActivateSectionB],
  exports: [RouterModule]
})
export class RouterEventModule { }
/*
guard is executed between ActivationStart and GuardsCheckEnd
*/
 
@Component({
  selector: 'app-router-event',
  templateUrl: './router-event.component.html',
  styleUrls: ['./router-event.component.scss']
})
export class RouterEventComponent implements OnInit {

  currentRoute;
  loading = false;

  ngOnInit(): void {
  }

  constructor(private router: Router) {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading 
        this.loading = true;
        console.log(`%c ????000000 NavigationStart: `, `color: #4CAF50; font-weight: bold`, event);

        console.group("NavigationStart Event");
        // Every navigation sequence is given a unique ID. Even "popstate"
        // navigations are really just "roll forward" navigations that get
        // a new, unique ID.
        console.log("navigation id:", event.id);
        console.log("route:", event.url);
        // The "navigationTrigger" will be one of:
        // --
        // - imperative (ie, user clicked a link).
        // - popstate (ie, browser controlled change such as Back button).
        // - hashchange
        // --
        // NOTE: I am not sure what triggers the "hashchange" type.
        console.log("trigger:", event.navigationTrigger);

        // This "restoredState" property is defined when the navigation
        // event is triggered by a "popstate" event (ex, back / forward
        // buttons). It will contain the ID of the earlier navigation event
        // to which the browser is returning.
        // --
        // CAUTION: This ID may not be part of the current page rendering.
        // This value is pulled out of the browser; and, may exist across
        // page refreshes.
        if (event.restoredState) {

          console.log(
            "restoring navigation id:",
            event.restoredState.navigationId
          );

        }

        console.groupEnd();
      
      // this.router.navigate(['AngularEvent/section-c'])//this will make stack overflow

      }
      /*
      else if (event instanceof RoutesRecognized) {
        // Router parses the URL and the routes are recognized.
      }
      else if (event instanceof RouteConfigLoadStart) {
        // Before the Router lazyloads a route configuration.
      }
      else if (event instanceof RouteConfigLoadEnd) {
        // Route has been lazy loaded.
      }
      */
      else if (event instanceof NavigationEnd) {
        // Navigation Ended Successfully.
        // Hide loading 
        this.loading = false;
        this.currentRoute = event.url;
        console.log(`%c ????000000 NavigationEnd: `, `color: #4CAF50; font-weight: bold`, event);
       
      }
      else if (event instanceof NavigationCancel) {
        this.loading = false;
        // Navigation is canceled as the Route-Guard returned false during navigation.
      }
      else if (event instanceof NavigationError) {
        // Navigation fails due to an unexpected error.
        // Hide loading 
        this.loading = false;
        console.log('NavigationError:', event.error);
      }
      else if(event instanceof ActivationStart){
        console.log('mmm event',event)
        if(event.snapshot.routeConfig.path=='AngularEvent/section-b'){
          console.log('mmmmmmmmmmmmmmmmmmmmm');
          //we should put touer.navigate() here just before guard
          this.router.navigate(['AngularEvent/section-c'])
        }
      } else {
        console.log('navigation event ', event)
      }
    });
  }

  goto(path) {
    this.router.navigateByUrl(path)
  }
}
