import { Component, OnInit } from '@angular/core';
import { ProgressBarItem } from '../css/step-progress-bar-pickup/navigation-model';
import * as NavigationConstants from '../css/step-progress-bar-pickup/navigation-model';
@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent implements OnInit {
  private index = 0;

  private steps: Array<ProgressBarItem[]> = [
    NavigationConstants.PROGRESS_BAR_LOCATION,
    NavigationConstants.PROGRESS_BAR_PICKUP_SCHEDULE,
    NavigationConstants.PROGRESS_BAR_DATETIME
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getProgressBarItems(): ProgressBarItem[] {
    return this.steps[this.index];
  }

  next() {
    this.index = (this.index + 1) % this.steps.length;
    this.steps[this.index];
  }

}
