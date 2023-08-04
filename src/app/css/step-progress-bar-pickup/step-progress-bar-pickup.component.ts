import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ProgressBarItem } from './navigation-model';

@Component({
  selector: 'app-step-progress-bar-pickup',
  templateUrl: './step-progress-bar-pickup.component.html',
  styleUrls: ['./step-progress-bar-pickup.component.scss']
})
export class StepProgressBarPickupComponent implements OnInit {
  @Input() progressBarItems:ProgressBarItem[];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
    console.info(`------ProgressBarComponent`,changes);
  }

}
