import { Component } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { BehaviorSubject, Subscription, combineLatest } from 'rxjs';
import { InjectionToken, NgModule } from '@angular/core';
import { BREAKPOINTS, BREAKPOINT, DEFAULT_BREAKPOINTS } from '@angular/flex-layout';
import { TranslateService } from '@ngx-translate/core';
import { NgLog } from './angular-event/decorator/classDecorator/ng-log/ng-log';
import { mapFitBounds } from '../app/google-maps/mapFitBounds.util'
import { AppUtil } from './snap-ship/utils/app-util';
//https://github.com/angular/flex-layout/wiki/BreakPoints
//https://www.youtube.com/watch?v=DcqeQ-ku6r8&t=171s: Angular Debugging of "Expression Changed" Error
//https://www.youtube.com/watch?v=z90TADl4Moc
//https://www.youtube.com/watch?v=ibn2yAomxp8  : routing
//https://www.youtube.com/watch?v=-VDOAjzLcvQ :SSR
//https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd: Event loop
//https://dev.to/this-is-angular/angular-signals-everything-you-need-to-know-2b7g Signal
//https://www.knowledgehut.com/blog/web-development/how-to-build-library-for-angular-apps : create lib
//https://www.youtube.com/watch?v=F1eIZMkgeAU jquery UI
//https://www.youtube.com/watch?v=996OiexHze0 OAuth2 + opid

declare var google: any;
export const BreakPointsProvider = {
  provide: BREAKPOINTS,
  useValue: DEFAULT_BREAKPOINTS,
  multi: true
};
@NgLog()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BreakPointsProvider]
})
export class AppComponent {
  title = 'flex';
  mediaSub: Subscription;
  deviceXs: boolean;
  private EARLIEST_TIMES = [
    '12 PM',
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM'
  ];
  LATEST_TIMES = [
    '1 PM',
    '2 PM',
    '3 PM',
    '4 PM',
    '5 PM'
  ];

  constructor(public mediaObserver: MediaObserver, public translateService: TranslateService,
  ) {
    const appUtil = new AppUtil();
    console.log('appUtil', appUtil)
    console.log('AppUtil', AppUtil)
  }

  ngOnInit() {
    this.practiceBehaviourSubject();
    mapFitBounds(document.getElementById("map-canvas"), google);
    //console.log('==========BREAKPOINTS, DEFAULT_BREAKPOINTS ',BREAKPOINTS, DEFAULT_BREAKPOINTS)
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        //console.log(result.mqAlias)
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
      }
    );
    const self = this;
    // this language will be used as a fallback when a translation isn't found in the current language
    self.translateService.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    let code = this.translateService.getBrowserLang();
    self.translateService.use(code);
    const existingPickupHourRange: number[] = [12, 17]; //[14,15];//
    this.setEarliestTimeSlotByExcludingExistingPickup(existingPickupHourRange, this.EARLIEST_TIMES);
    this.setLatestTimeSlotByExcludingExistingPickup(existingPickupHourRange, this.LATEST_TIMES);
    const selectedEh = 15;
    this.setLatestTimeSlot(existingPickupHourRange, selectedEh);
    const selectedLh = 16;
    this.setEarliestTimeSlot(existingPickupHourRange, selectedLh)
  }
  ngOnDestroy() {

  }
  private getHourValue(timeString: string): number {
    const arr: string[] = timeString.split(' ');
    return +arr[0];
  }


  private setEarliestTimeSlotByExcludingExistingPickup(existingPickupHourRange: number[], fullTimeSlot: string[]): string[] {
    let timeSlot: string[] = [];
    let idx = 0;
    let prevMin = 0;
    let prevMax = 0;
    while (idx < existingPickupHourRange.length) {
      const min = existingPickupHourRange[idx++];
      const max = existingPickupHourRange[idx++];
      fullTimeSlot.forEach(item => {
        let hourItem = this.getHourValue(item); //12,1,2,3,4
        if (hourItem < 12) {
          hourItem += 12;
        }
        if (existingPickupHourRange.length == 2) {
          if (hourItem < min || hourItem >= max) {
            timeSlot.push(item);
          }
        } else if (existingPickupHourRange.length >= 4) {
          if (hourItem < min && hourItem >= prevMax) {
            if (!timeSlot.includes(item)) {
              timeSlot.push(item);
            }
          }
        }
      });
      prevMin = min;
      prevMax = max;
    }
    console.log('earliestTmeSlot', timeSlot)
    return timeSlot;
  }

  private setLatestTimeSlotByExcludingExistingPickup(existingPickupHourRange: number[], fullTimeSlot: string[]): string[] {
    let timeSlot: string[] = [];
    let idx = 0;
    let prevMin = 0;
    let prevMax = 0;
    while (idx < existingPickupHourRange.length) {
      const min = existingPickupHourRange[idx++];
      const max = existingPickupHourRange[idx++];
      fullTimeSlot.forEach(item => {
        let hourItem = this.getHourValue(item); //12,1,2,3,4
        if (hourItem < 12) {
          hourItem += 12;
        }
        if (existingPickupHourRange.length == 2) {
          if (hourItem <= min || hourItem > max) {
            timeSlot.push(item);
          }
        } else if (existingPickupHourRange.length >= 4) {
          if (hourItem <= min && hourItem > prevMax) {
            if (!timeSlot.includes(item)) {
              timeSlot.push(item);
            }
          }
        }
      });
      prevMin = min;
      prevMax = max;
    }
    console.log('latestTmeSlot', timeSlot)
    return timeSlot;
  }

  private setLatestTimeSlot(existingPickupHourRange: number[], selectedEh: number): string[] {
    const latestTimes: string[] = [];
    let idx = 0;
    let prevMin = 0;
    let prevMax = 0;
    while (idx < existingPickupHourRange.length) {
      const min = existingPickupHourRange[idx++];
      const max = existingPickupHourRange[idx++];

      this.LATEST_TIMES.forEach(item => {
        let hourItem = this.getHourValue(item); //12,1,2,3,4
        if (hourItem < 12) {
          hourItem += 12;
        }
        if (hourItem <= min && hourItem > selectedEh) {
          latestTimes.push(item);
        }
      });
      if (latestTimes.length > 0) {
        break;
      }
      prevMin = min;
      prevMax = max;
    }
    console.log('22latestTimes', latestTimes)
    return latestTimes;
  }

  private setEarliestTimeSlot(existingPickupHourRange: number[], selectedLh: number): string[] {
    const earliesttTimes: string[] = [];
    let idx = 0;
    let prevMin = 0;
    let prevMax = existingPickupHourRange[1];
    while (idx < existingPickupHourRange.length) {
      const min = existingPickupHourRange[idx++];
      const max = existingPickupHourRange[idx++];

      this.EARLIEST_TIMES.forEach(item => {
        let hourItem = this.getHourValue(item); //12,1,2,3,4
        if (hourItem < 12) {
          hourItem += 12;
        }
        if ((hourItem >= prevMax || hourItem < min) && hourItem < selectedLh) {
          earliesttTimes.push(item);
        }
      });
      prevMin = min;
      prevMax = max;
      if (earliesttTimes.length > 0) {
        break;
      }
    }
    console.log('33earliesttTimes', earliesttTimes)

    return earliesttTimes;
  }

  // private mapFitBounds() {
  //   var ledbury = new google.maps.LatLng(52.0339, -2.42357);
  //   var malvern = new google.maps.LatLng(52.106834, -2.3305105);
  //   var bounds = new google.maps.LatLngBounds();

  //   var mapOptions = {
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  //   var pin1 = new google.maps.Marker({
  //     position: ledbury,
  //     map: map,
  //     zIndex: 1,
  //     optimized: false
  //   });
  //   bounds.extend(pin1.getPosition());
  //   map.fitBounds(bounds);

  //   var pin2 = new google.maps.Marker({
  //     position: malvern,
  //     map: map,
  //     zIndex: 2,
  //     optimized: false
  //   });
  //   bounds.extend(pin2.getPosition());
  //   map.fitBounds(bounds);
  //   console.log(bounds);
  // }

  private practiceBehaviourSubject() {
    const one = new BehaviorSubject(1);
    const two = new BehaviorSubject(2);
    combineLatest([one, two]).subscribe(([o, t]) => {
      console.log('practiceBehaviourSubject', o * t);
    });
    one.next(10);
    two.next(20);
  }

}
