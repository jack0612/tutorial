import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DecimalOneDirective } from '../directives/decimal-one/decimal-one.directive';
import { NgTemplateOutletComponent } from '../ng-template-outlet/ng-template-outlet.component';
//https://ultimatecourses.com/blog/element-refs-in-angular-templates

/*
A ViewChild can return a few different things, one being an ElementRef ,
TemplateRef,
ViewContainerRef,
Componet,
Directive
*/
@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent {
  //when injecting a reference to a plain HTML element, we get back the corresponding wrapped DOM element
  @ViewChild('username') input: ElementRef<HTMLInputElement>;
  //TwmplatwRef:The TemplateRef holds the reference template defined by ng-template.
  @ViewChild('sayHelloTemplate', { read: TemplateRef }) sayHelloTemplate:TemplateRef<any>;
 
  @ViewChild("vc", {read: ViewContainerRef}) vc: ViewContainerRef;
  
  @ViewChild(NgTemplateOutletComponent) ngTemplateOutletComponent: NgTemplateOutletComponent;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //when injecting a reference applied to a component, we get back the component instance
  @ViewChild('sample') sample: NgTemplateOutletComponent;
  //we would like to get the DOM element that is linked to the component! This is still possible, by using the second argument of the @ViewChild decorator:
  //In this case, we are using the read property to specify that we want to get the DOM element (wrapped by ElementRef) of 
  //the matched template reference, and not the component.
  @ViewChild('sample', { read: ElementRef }) sample2: ElementRef<NgTemplateOutletComponent>;
  //Using @ViewChild to inject Directives
  @ViewChild('inputReference', { read: DecimalOneDirective }) decimalOne: DecimalOneDirective;


  primary
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    // ElementRef { nativeElement: <input> }
    //console.log('00000000000 ViewChildComponent', this.input);
    this.renderer.setStyle(this.input.nativeElement, 'background', '#d515a0');
    //console.log('111111111 ViewChildComponent.ngTemplateOutletComponent', this.ngTemplateOutletComponent);
    //console.log('2222222222 ViewChildComponent.sample', this.sample);
    //console.log('33333 ==', this.sample == this.ngTemplateOutletComponent) //true
    //console.log('444444  ViewChildComponent.sample2', this.sample2);
    //console.log('5555 decimalOne', this.decimalOne)

    //console.log('666666 viewContainerRef',this.vc.element.nativeElement);
  }
}
