import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class HeroService {
    constructor(private http: HttpClient) { }

    getHeroes(): Observable<any[]> {
        return this.http
            .get<{ items: any[] }>(
                'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
            )
            .pipe(map((books) => books.items || []));
    }
}