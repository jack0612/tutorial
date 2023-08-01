import { Directive, HostBinding, HostListener } from '@angular/core';


@Directive({selector: '[myDir]'})
export class HostDirective {
  @HostBinding('attr.role') role1 = 'admin'; 
  @HostListener('click') onClick() {``
   this.role1=this.role1=='admin'?'guest':'admin';
  }
  
}