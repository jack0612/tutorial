import { Renderer2 } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//https://www.youtube.com/watch?v=jd26T4haYZs
//https://stackoverflow.com/questions/8052178/difference-between-document-documentelement-clientheight-and-document-body-clien
/*
The document.documentElement property gives you the html element, while the document.body property gives you the body element.

The window.innerHeight property returns the height of the window rather than the height of the content.
 The offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element.
 element.getBoundingClientRect().top: y distance  relative to the top of viewport:
*/
@Component({
  selector: 'app-scroll-to-div-bottom',
  templateUrl: './scroll-to-div-bottom.component.html',
  styleUrls: ['./scroll-to-div-bottom.component.scss']
})
export class ScrollToDivBottomComponent implements OnInit {
  @ViewChild('myDiv')containerDiv:ElementRef;
  @ViewChild('upDiv')elementDiv:ElementRef;
  items:string[]=[];

  constructor(private renderer: Renderer2) {
    console.log({renderer})
   }

  ngOnInit(): void {
    let i;
    for(i=0;i<9;i++){
      this.items.push('item'+i);
    }
  }
  scrollDownButton(){
    //this.containerDiv.nativeElement.scrollTop=this.containerDiv.nativeElement.scrollHeight;
    let container=document.getElementById('myDiv');
    container.scrollTop=container.scrollHeight;
  }
  /*
  The offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element.

The returned value includes:

the top position, and margin of the element
the top padding, scrollbar and border of the offsetParent element
Note: The offsetParent element is the nearest ancestor that has a position other than static.
element.getBoundingClientRect().top: y distance  relative to the top of viewport:
  */
  scrollUpButton(){
    /*
    var childElement = document.querySelector('#upDiv');
    var elementPosition = childElement.getBoundingClientRect().top;
    console.log( this.elementDiv.nativeElement.offsetTop, childElement.getBoundingClientRect().top)//548,548
    //this.containerDiv.nativeElement.scrollTop=this.elementDiv.nativeElement.offsetTop;
    this.renderer.setProperty(this.containerDiv.nativeElement,'scrollTop',this.elementDiv.nativeElement.offsetTop);
    console.log( this.elementDiv.nativeElement.offsetTop, childElement.getBoundingClientRect().top)//548,278
    console.log({upDiv:this.elementDiv})
    */
    let container=document.getElementById('myDiv');
    container.scrollTop=0;
  }

  myFunction() {
    var div = document.getElementById("myDiv2");
    var rect = div.getBoundingClientRect();
    let x = rect.left;
    let y = rect.top;
    let w = rect.width;
    let h = rect.height;
    alert ("Left: " + x + ", Top: " + y + ", Width: " + w + ", Height: " + h);
  }
}
