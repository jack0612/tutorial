import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
 
 


@Injectable( )

export class CanActivateSectionB implements CanActivate {
    
    constructor(  private router: Router){}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log('kkkkkkkkkkkkkkk in guard')
        //this.router.navigate(['AngularEvent/section-c'])
            //this will begin new NavigationStart(after ActivationStart):  NavigationStart {id: 3, url: "/AngularEvent/section-c", navigationTrigger: "imperative", restoredState: null}
        return true;
    }
}
