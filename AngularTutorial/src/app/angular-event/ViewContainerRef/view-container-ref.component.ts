import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
/*
1. viewContainerRef points to host when it is injected into constructor as in this situation
    constructor(private _vcr: ViewContainerRef) {}
2. viewContainerRef points to the DOM element when is read in @viewChild a in this situation
    @ViewChild('container', { read: ViewContainerRef }) _vcr2;
3. inserted after as a sibling of viewContainerRef by
    viewContainerRef.createEmbeddedView(this.tpl)
*/
/*
https://netbasal.com/angular-2-understanding-viewcontainerref-acc183f3b682
A DOM element (container) where I can put your newly component as a sibling to this element.
*/
//ttps://stackoverflow.com/questions/44259573/angular-how-do-directives-see-template-viewcontainer
/*
<div *appDelay="500">
    Hooray
</div>
will be

<ng-template [appDelay]="500">
    <div>
        Hooray
    </div>
</ng-template>
it also can be described like so:

<ng-template view-container-ref></ng-template>
<!-- ViewRef -->
  <div>
    Hooray
  </div>
<!-- /ViewRef -->
*/
@Component({
  selector: 'app-view-container-ref',
  templateUrl: './view-container-ref.component.html',
  styleUrls: ['./view-container-ref.component.scss']
})
export class ViewContainerRefComponent implements OnInit {



  ngOnInit(): void {
  }

  @ViewChild('tpl') tpl;
  //the container will refer to your host element ( the app-view-container-ref element ) 
  //and the template will be inserted as a sibling of the app-view-container-ref element.
  constructor(private _vcr: ViewContainerRef) {
    console.log('----------')
  }
  
  ngAfterViewInit() {
    this._vcr.createEmbeddedView(this.tpl);
    this._vcr2.createEmbeddedView(this.tpl2);
  }
//We can use the ViewChild decorator to grab any element in our view and read him as ViewContainerRef.
//In this example, the container element is the “div” element, and the template will be inserted as a sibling of this “div.”
  @ViewChild('container', { read: ViewContainerRef }) _vcr2;
  @ViewChild('tpl2') tpl2;

}
