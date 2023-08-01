//our root app component
import { ChangeDetectorRef, Component, ComponentFactoryResolver, Injectable, Input, NgModule, VERSION, ViewChild, ViewContainerRef } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'


@Component({
  selector: 'b-comp',
  template: `
      <span>{{name}}</span>
  `
})
export class BComponent {
  name = 'I am B component';

  constructor() {
  }
}

@Component({
  selector: 'app-expression-changed',
  template: `
      <h1>Hello {{name}}</h1>
      <ng-container #vc></ng-container>
  `,
})
export class ExpressionChangedComponent {
  @ViewChild('vc', { read: ViewContainerRef, static: true }) vc;
  name = 'I am A component';

  constructor(private r: ComponentFactoryResolver, private cd: ChangeDetectorRef) {
  }
  ngOnInit() {
    //will NOT generate ExpressionChanged error
    const f = this.r.resolveComponentFactory(BComponent);
    this.vc.createComponent(f);
  }

  //ngAfterViewInit() {
  //will generate ExpressionChanged error
  // const f = this.r.resolveComponentFactory(BComponent);
  // this.vc.createComponent(f);
  //}

  //solution
  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}



