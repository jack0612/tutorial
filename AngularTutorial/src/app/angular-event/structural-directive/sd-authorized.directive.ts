
//https://medium.com/angular-shots/shot-8-how-to-create-a-structural-directive-isauthorized-custom-ngif-c07494e0b538
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

import { SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({ selector: '[isAuthorized]' })
export class SdAuthorizedDirective {
  //@Input() isAuthorized: boolean;
  private _hasView = false;

  @Input()
  set isAuthorized(authorized: boolean) {
    //console.log('======authorized',authorized)
    if (authorized != null) {


      if (authorized && !this._hasView) {
        this.vcr.createEmbeddedView(this.templateRef);
        this._hasView = true;
      } else if (!authorized && this._hasView) {
        this.vcr.clear();
        this._hasView = false;
      }
    }
  }

  @Input()
  set isAuthorizedSecondParam(param:any){
    //console.log('======param',param)
  };

  constructor(private templateRef: TemplateRef<any>,
    private vcr: ViewContainerRef,
  ) {
    console.log(this.vcr)
  }

  /*
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes.isAuthorized', changes.isAuthorized)
    if (changes.isAuthorized && changes.isAuthorized.currentValue != null) {
      this.isAuthorized = changes.isAuthorized.currentValue;
      const isAuthorized = this.isAuthorized;

      if (isAuthorized && !this._hasView) {
        this.vcr.createEmbeddedView(this.templateRef);
        this._hasView = true;
      } else if (!isAuthorized && this._hasView) {
        this.vcr.clear();
        this._hasView = false;
      }
    }
  }
*/
  ngOnInit() {

  }
}