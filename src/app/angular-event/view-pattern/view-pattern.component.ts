import { Component } from '@angular/core';
import { ViewDataProviderService } from './services/view-data-provider.service';

@Component({
  selector: 'app-view-pattern',
  templateUrl: './view-pattern.component.html',
  styleUrls: ['./view-pattern.component.scss']
})
export class ViewPatternComponent {

  title = 'view-pattern';

  constructor(private readonly dataProvider: ViewDataProviderService) {}

  generateData(): void {
    this.dataProvider.generateData();
  }

  generateError(): void {
    this.dataProvider.generateError();
  }

  generateLoading(): void {
    // this.dataProvider.generateLoading();
    this.dataProvider.generateSkeletonLoading();

  }

}




