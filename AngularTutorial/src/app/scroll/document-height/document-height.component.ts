import { ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
//https://stackoverflow.com/questions/53424704/angular-scroll-height-and-document-height-units
//https://gist.github.com/emanuer
//https://gist.github.com/emanuer/f2a14897bf3084e5e0ce0a04c240a1c6
//https://www.bennadel.com/blog/3724-maintaining-scroll-offsets-when-adding-content-above-the-users-viewport-in-angular-9-0-0-rc-2.htm
/*
window.innerHeight and document.documentElement.clientHeight are same, only difference is IE older browser calles it 
document.documentElement.clientHeight, and modern browswer calles it window.innerHeight.
*/
/* https://stackoverflow.com/questions/9439725/how-to-detect-if-browser-window-is-scrolled-to-bottom
How to detect if browser window is scrolled to bottom?
window.onscroll = function(ev) {
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
        // you're at the bottom of the page
    }
};
*/
/*https://www.geeksforgeeks.org/how-to-detect-when-user-scrolls-to-the-bottom-of-a-div/
How to detect when user scrolls to the bottom of a div
 $(window).on('scroll', function() {
            if ($(window).scrollTop() >= $(
              '.div').offset().top + $('.div').
                outerHeight() - window.innerHeight) {
                
                alert('You reached the end of the DIV');
            }
        });
*/
/*https://webdevpuneet.com/javascript-detect-scroll-to-the-bottom-inside-an-element-or-the-document/#gsc.tab=0

document.getElementsByClassName("container")[0].onscroll = function(e) {
  if( this.scrollTop > (this.scrollHeight - this.offsetHeight - 50)){
    document.getElementsByClassName("status")[0].innerHTML = "<h2>You have reached to the bottom of the div</h2>";
  }else{
    document.getElementsByClassName("status")[0].innerHTML = "";
  }
};
*/
@Component({
  selector: 'app-document-height',
  templateUrl: './document-height.component.html',
  styleUrls: ['./document-height.component.scss']
})
export class DocumentHeightComponent implements OnInit {
  screenWidth: number;
  screenHeight: number;
  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    let a = document.documentElement.scrollTop //this property returns the number of pixels an container's internal content is scrolled vertically. 

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  @ViewChild('fa1') fa1: ElementRef;
  @ViewChildren('fa1View') fa1Views: QueryList<ElementRef>;
  viewHeight;
  /*
  The offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element.
  
  The returned value includes:
  
  the top position, and margin of the element
  the top padding, scrollbar and border of the offsetParent element
  */


  ngAfterViewInit() {
    this.viewHeight = window.innerHeight - document.getElementById('parrent-Element').offsetTop;    // get max height
    this.fa1.nativeElement.style.height = this.viewHeight + 'px';    // set height
    for (let l = 0; l < this.fa1Views.toArray().length; l++) {
      this.fa1Views.toArray()[l].nativeElement.style.height = this.viewHeight + 'px';
    }
    //this.measurments();
  }
  // throttlescroll
  // measurments = () => {
  //   this.getmeasurements()

  //   window.addEventListener("resize", function () {
  //     this.getmeasurements()
  //   }, false)

  //   window.addEventListener("scroll", function () {
  //     timer(50).subscribe(() => {
  //       this.amountscrolled()
  //     });
  //   }
  // }

  // private getmeasurements() {
  //   const winheight = window.innerHeight || (document.documentElement || document.body).clientHeight
  //   const docheight = getDocHeight()
  //   const trackLength = docheight - winheight;
  //   return trackLength;
  // }

  // private amountscrolled() {
  //   const trackLength = this.getmeasurements();
  //   var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
  //   var pctScrolled = Math.floor(scrollTop / trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
  //   console.log(pctScrolled + '% scrolled')
  // }

}




