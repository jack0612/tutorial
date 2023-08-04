import { Component, OnInit } from '@angular/core';
//https://angular.io/api/common/NgTemplateOutlet
//https://indepth.dev/posts/1405/ngtemplateoutlet
@Component({
  selector: 'app-ng-template-outlet',
  templateUrl: './ng-template-outlet.component.html',
  styleUrls: ['./ng-template-outlet.component.scss']
})
export class NgTemplateOutletComponent implements OnInit {
  myContext = {$implicit: 'World', localSk: 'Svet'};
  constructor() { }

  ngOnInit(): void {
  }

}
