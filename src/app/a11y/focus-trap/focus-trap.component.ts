import { FocusMonitor, FocusTrap, FocusTrapFactory, ListKeyManager } from '@angular/cdk/a11y';
import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
//https://codeburst.io/angular-cdk-getting-started-accessibility-a11y-1b6143b961c
@Component({
  selector: 'app-focus-trap',
  templateUrl: './focus-trap.component.html',
  styleUrls: ['./focus-trap.component.scss']
})
export class FocusTrapComponent  {


  keyManager : any

  @ViewChild('element') element : ElementRef; 
  @ViewChildren('elementChild') elementChild : QueryList<any>

  constructor( private focusTrapService: FocusTrapFactory, 
            private focusMonitor : FocusMonitor ) {}

            /*
  ngAfterViewInit() { 
    this.keyManager = new ListKeyManager(this.elementChild) 
    this.keyManager.withHorizontalOrientation('ltr') // Arrow navigation options 
    this.keyManager.withWrap()  // Arrow navigation options 
  }

  // Enables keyboard arrows navigation 
  @HostListener('window:keyup', ['$event']) 
  keyFunc(event) {
    if (event.code !== 'Tab') {
      this.keyManager.onKeydown(event)
      this.focusMonitor.focusVia(this.keyManager.activeItem.nativeElement, "keyboard")
    }
    else {  // 'artificially' updates the active element in case the user uses Tab instead of arrows
      this.keyManager.onKeydown(event)
      this.keyManager.setNextItemActive()
    }
  }
*/
  // Shows the form, puts focus on it and initialize keyboard navigation 
  focusTrap:FocusTrap
  testA11y() {
    this.element.nativeElement.hidden = false;   
    this.focusTrap = this.focusTrapService.create(this.element.nativeElement)  // creates a focus trap region
    this.focusTrap.focusInitialElement()     // Moves the focus in the form (by default the first field)
    //this.keyManager.setFirstItemActive()    // Sets the element we focused on as 'active' to the KeyManager
  }

  loseFocus(){
    this.focusTrap.destroy();
  }
}
