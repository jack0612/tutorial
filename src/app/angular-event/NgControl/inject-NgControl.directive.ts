import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, HostBinding, Inject, Input, Self } from '@angular/core';
import { ControlContainer, NgControl } from '@angular/forms';
import { ValidationBorderConfig, VALIDATION_BORDER_CONFIG } from './public_api';
//https://netbasal.com/attribute-directives-angular-forms-b40503643089
//https://levelup.gitconnected.com/angular-get-control-in-controlvalueaccessor-b7f09a485fba
//https://indepth.dev/posts/1143/a-thorough-exploration-of-angular-forms
//Now that you have the ngControl, you can access the formControl by using ngControl.control.
//https://unicorn-utterances.com/posts/angular-components-control-value-accessor/
//it seems only one of NgControl and ControlContainer can be provided to directive or component
/*
https://jenniferwadella.com/blog/angular-control-container
The ControlContainer is a base class for form directives 
that contain multiple registered instances of NgControl.
We can use the ControlContainer to access FormControls, FormGroups, and FormArrays and manage a main form chunked across components.
the child component and nested components can get its parent component's form via ControlContainer
see: https://jenniferwadella.com/blog/angular-control-container
the directive can get its host lement's control via NgControl
*/
/*
<div *ngIf="hero" >{{hero.name}}</div>===>
<template [ngIf]="hero">
  <div>{{hero.name}}</div>
</template>
*/
@Directive({
  selector: '[appValidationBorder]'
})
export class ValidationBorderDirective {
  private readonly colors: {
    VALID: string;
    INVALID: string;
    PENDING: string;
    DISABLED: string;
  };

  @Input('appValidationBorderWidth') borderWidth: string;
  @Input('appValidationBorderStyle') borderStyle: string;

  @HostBinding('style.border-style')
  get borderStyleCss() {
    return this.showBorder ? this.borderStyle : null;
  }

  @HostBinding('style.border-width')
  get borderWidthCss() {
    return this.showBorder ? this.borderWidth : null;
  }

  @HostBinding('style.border-color')
  get borderColorCss() {
    return this.showBorder ? this.colors[this.ngControl.status] : null;
  }

  get showBorder() {
    return this.ngControl.control.dirty || this.ngControl.control.touched;
  }
/*
the Angular DI framework will provide us the closest 
form control directive. We also make sure to limit the injection with the @Self decorator.
*/
//no provide for controlContainer
  constructor(
    @Self() private ngControl: NgControl,
  
    @Inject(VALIDATION_BORDER_CONFIG) config: ValidationBorderConfig
  ) {
    this.colors = config.colors;
    this.borderWidth = config.borderWidth;
    this.borderStyle = config.borderStyle;
    console.log('xxxxxxxxxx ngConbtrol',ngControl)
   
    
  }
}
