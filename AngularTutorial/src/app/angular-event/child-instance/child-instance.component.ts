


import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'child-instance',
  template: `
  <h3>Countdown to Liftoff (via local variable)</h3>
  <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <div class="seconds">{{timer.seconds}}</div>
  <animalNoise seconds='200' #timer></animalNoise>

  <p>-----------------------------------</p>
  <button (click)="timer1.start()">Start</button>
  <button (click)="timer1.stop()">Stop</button>
  <div class="seconds">{{timer1.seconds}}</div>
  <animalNoise  #timer1></animalNoise>
  <p>-----------------------------------</p>
  check ngOnChanges
  <button (click)="updateSeconds()">updateSeconds</button>
  <animalNoise [seconds]='seconds' #timer></animalNoise>
  `,
  styleUrls: []
})
export class ChildInstanceComponent {
  seconds = 1000;
  @ViewChild('timer')
  private timerComponent: ChildComponent;
  ngOnInit() {
    //console.log('----timerComponent',this.timerComponent);
  }
  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    //console.log('timerComponent',this.timerComponent);
  }
  updateSeconds() {
    this.seconds--;
  }
}
