import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import {  BookedPickupsDto } from '../../ship-common/models/pickup/booked-pickups-dto.model';

@Injectable()
export class PickupService {
  private _oneSlot: BookedPickupsDto = {
    bookedPickups: [{
      date: 'Jan 11, 2021',
      time: '12 pm - 1 pm',
      address: '365 March RD',
      location: 'Front door',
      instruction: 'knock front door'
    },
    {
      date: 'Jan 12, 2021',
      time: '1 pm - 2 pm',
      address: '365 March RD',
      location: 'Back door',
      instruction: 'knock back door'
    }],
    preferedBookedPickupIndex: 1
  };

  constructor(private http: HttpClient) { }

  getBookedPickups(): Observable<BookedPickupsDto> {
    //return this.http.get<PickupDateTime[]>('url');
    //return of(this._oneSlot);
    return throwError('api error made by jacklu')
  }


}