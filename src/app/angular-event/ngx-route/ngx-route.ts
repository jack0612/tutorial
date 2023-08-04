import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export function queryParamFactory( paramKey: string,): (route: ActivatedRoute) => Observable<string | null> {
  return (route: ActivatedRoute) => {
    return route.queryParamMap.pipe(map(queryMap => queryMap.get(paramKey)));
  };
}
export function queryParamSnapshotFactory(
  paramKey: string,
): (route: ActivatedRoute) => string | null {
  return (route: ActivatedRoute) => {
      return route.snapshot.queryParamMap.get(paramKey);
  };
}

export function routeDataFactory(
  paramKey: string,
): (route: ActivatedRoute) => Observable<any> {
  return ({data}: Data): Observable<any> => {
      return data.pipe(map((data: Data) => data[paramKey]));
  };
}

export function routeDataSnapshotFactory(
  paramKey: string,
): (route: ActivatedRoute) => any {
  return (route: ActivatedRoute): any => {
      return route.snapshot.data[paramKey];
  };
}

export function routeParamFactory(
  paramKey: string,
): (route: ActivatedRoute) => Observable<string | null> {
  return (route: ActivatedRoute): Observable<string | null> => {
      return route.paramMap.pipe(map(param => param.get(paramKey)));
  };
}

export function routeParamSnapshotFactory(
  paramKey: string,
): (route: ActivatedRoute) => string | null {
  return (route: ActivatedRoute): string | null => {
      return route.snapshot.paramMap.get(paramKey);
  };
}