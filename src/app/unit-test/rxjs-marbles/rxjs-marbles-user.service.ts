import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';

 
export class RxjsMarblesUserService {
  private readonly testData = ['Anna', 'Bert', 'Chris'];

  getUsers(): Observable<string> {
    return interval(1000).pipe(
      take(this.testData.length),
      map(i => this.testData[i])
    );
  }

  constructor() {}
}