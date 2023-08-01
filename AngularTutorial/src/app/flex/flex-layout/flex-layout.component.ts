import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription, Observable } from 'rxjs';
/*
https://github.com/angular/flex-layout/wiki/MediaObserver
https://codinglatte.com/posts/angular/adaptive-layout-design-angular-flex-layout/
*/
@Component({
  selector: 'media-query-status',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.scss']
})
export class FlexLayoutComponent  {

  watcher: Subscription;
  activeMediaQuery = '';
  media$: Observable<MediaChange[]>;
  constructor(mediaObserver: MediaObserver) {
    this.media$ = mediaObserver.asObservable();
    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if (change.mqAlias == 'xs') {
        this.loadMobileContent();
      }
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

  loadMobileContent() {
    // Do something special since the viewport is currently
    // using mobile display sizes
  }

}
