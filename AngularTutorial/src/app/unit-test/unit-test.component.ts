import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-unit-test',
  templateUrl: './unit-test.component.html',
  styleUrls: ['./unit-test.component.scss']
})
export class UnitTestComponent implements OnInit {
  @ContentChild('template', {read: TemplateRef,static:true}) templateRef: any;
  constructor() { }

  ngOnInit(): void {
    console.log('?????????UnitTestComponent.templateRef',this.templateRef)
    //?????????UnitTestComponent.templateRef TemplateRef {_declarationView: LComponentView_AppComponent(368), _declarationTContainer: TNode, elementRef: ElementRef}
  }

}
