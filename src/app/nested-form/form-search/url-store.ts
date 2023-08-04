import {
    Router,
    ActivatedRoute,
    Params,
    NavigationExtras
  } from "@angular/router";
  import { Injectable, InjectionToken, Inject } from "@angular/core";
  import { Observable, Subject, merge } from "rxjs";
  import { map } from "rxjs/operators";
  
  export interface ParamsConverter<T> {
    fromUrl(params: Params): T;
  
    toUrl(model: T): Params;
  }
  
  export const URL_STORE_CONVERTER = new InjectionToken<ParamsConverter<any>>(
    "ParamsConverter"
  );
  
  @Injectable()
  export class UrlStore<T> {
    changed: Observable<T>;
    refreshed = new Subject<T>();
    changedOrRefreshed: Observable<T>;
  
    constructor(
      @Inject(URL_STORE_CONVERTER) private converter: ParamsConverter<T>,
      private router: Router,
      private route: ActivatedRoute
    ) {
      this.changed = this.route.queryParams.pipe(map(converter.fromUrl));
      this.changedOrRefreshed = merge(this.changed, this.refreshed);
    }
  
    setSource(paramsChanges: Observable<T>) {
      paramsChanges.subscribe(params => {
       
        const urlParams = this.converter.toUrl(params);
       
        const extras = {
          relativeTo: this.route,
          queryParams: removeEmptyAtrributes(urlParams)
        } as NavigationExtras;
        console.log('----------params',params,urlParams,extras)
  
        this.router.navigate(["."], extras).then(result => {
          const urlIsTheSame = result === null;
          console.log('urlIsTheSame',urlIsTheSame)
          if (urlIsTheSame) {
            this.refreshed.next(params);
          }
        });
      });
    }
  }
  
  function removeEmptyAtrributes(params: Params): Params {
    // source https://stackoverflow.com/questions/286141/remove-blank-attributes-from-an-object-in-javascript/38340730#38340730
    return Object.entries(params)
      .filter(([_, v]) => v != "")
      .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
  }
  