import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'animalNoise',
  template: '<p>{{message}}</p>'
})
export class ChildComponent implements OnDestroy, OnChanges {

  intervalId = 0;
  message = '';
  _seconds;
  @Input()
  set seconds(seconds) {
    this._seconds = seconds;
    console.log('in set seconds', seconds)
  }

  ngOnDestroy() { this.clearTimer(); }

  ngOnChanges(changes: SimpleChanges) {
    console.log('in changes', changes)
    console.log('this', this)
  }

  start() { this.countDown(); }
  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this._seconds} seconds`;
  }

  private clearTimer() { clearInterval(this.intervalId); }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this._seconds -= 1;
      if (this._seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this._seconds < 0) { this._seconds = 10; } // reset
        this.message = `T-${this._seconds} seconds and counting`;
      }
    }, 1000);
  }
}