import { Component, ComponentFactoryResolver, ElementRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';

//https://ultimatecourses.com/blog/element-refs-in-angular-templates
//A ViewChild can return a few different things, one being an ElementRef - an element reference
//https://www.tektutorialshub.com/angular/elementref-in-angular/
//When  the ElementRef is injected in the constructor of component or directive, 
//the Angular will inject the reference to the host DOM element of the component or directive.
// @Directive({
//   selector: '[ttClass]',
// })
// export class ttClassDirective implements OnInit {
//   @Input() ttClass: string;
//   constructor(private el: ElementRef) {
//   }
//   ngOnInit() {
//     this.el.nativeElement.classList.add(this.ttClass);
//   }
// }

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrls: ['./element-ref.component.scss']
})
export class ElementRefComponent implements OnInit {
  @ViewChild('username') input: ElementRef<HTMLInputElement>;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {

  }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    console.log('elementRef', this.elementRef);//reference to <app-reference-ref></<app-reference-ref>
    console.log('input element',this.input);//reference to inout element
    // Access the input object or DOM node
    console.dir(this.input.nativeElement);

    // Manipulate via Renderer2
    this.renderer.setStyle(this.input.nativeElement, 'background', '#d515a0');
  }

}
