

import { ElementRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'jack-sidenav',
  templateUrl: './jack-sidenav.component.html',
  styleUrls: ['./jack-sidenav.component.scss']
})
export class JackSidenavComponent {
  events: string[] = [];
  opened: boolean;
  @ViewChild('sidenav') sidenav:MatSidenav ;

  ngAfterViewInit(){
    console.log('sidenav',this.sidenav)
  }
  toggle(){
    console.log('toggle called')
    this.sidenav.toggle().then((r:MatDrawerToggleResult)=>{
      console.log('r',r)
    });
  }
  openedChange(){
    console.log('openedChange')
    this.events.push(this.sidenav.opened.toString());
  }
}
