import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
//https://www.tektutorialshub.com/angular/ng-template-in-angular/
//https://medium.com/angular-in-depth/use-ng-template-c72852c37fba
//https://indepth.dev/posts/1052/exploring-angular-dom-manipulation-techniques-using-viewcontainerref
@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit {
  @ViewChild("vc", {read: ViewContainerRef}) vc: ViewContainerRef;
  @ViewChild("tpl") tpl: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let view = this.tpl.createEmbeddedView(null);
    this.vc.insert(view);
}

}
