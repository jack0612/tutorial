import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
//https://stackoverflow.com/questions/50549767/angular-4-scroll-a-div-a-certain-amount
//https://stackoverflow.com/questions/48048299/angular-5-scroll-to-top-on-every-route-click
//https://pumpingco.de/blog/automatic-scrolling-only-if-a-user-already-scrolled-the-bottom-of-a-page-in-angular/
//https://www.youtube.com/watch?v=L8X4zAsoxb4
/*
const {scrollTop,scrollHeight,clientHeight}=document.documentElement;
console.log({scrollTop,scrollHeight,clientHeight})
if(clientHeight+scrollTop>=scrollHeight-1){
  console.log('to the bottom')
}
*/

@Component({
  selector: 'app-scroll-element',
  templateUrl: './scroll-element.component.html',
  styleUrls: ['./scroll-element.component.scss']
})
export class ScrollElementComponent {
  @ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef;
  @ViewChildren('item') itemElements: QueryList<any>;
  
  private itemContainer: any;
  private scrollContainer: any;
   items = [];
  private isNearBottom = true;
  private idx=0;
  
  testVar1=null;
  testVar='12';
  ngAfterViewInit() {
  this.scrollContainer = this.scrollFrame.nativeElement;
  this.itemElements.changes.subscribe(_ => this.onItemElementsChanged());    


}
addItem(){
  this.items.push({});
}

private onItemElementsChanged(): void {
  if (this.isUserNearBottom()) {
    this.scrollToBottom();
  }
  this.func(this.testVar1)
}
func(testVar1){
  testVar1!=null? this.testVar='34':this.testVar='56'
  console.log('----',this.testVar)
}
private scrollToBottom(): void {
  console.log('this.scrollContainer.scrollHeight',this.scrollContainer.scrollHeight)
  this.scrollContainer.scroll({
    top: this.scrollContainer.scrollHeight,
    left: 0,
    behavior: 'smooth'
  });
}

private isUserNearBottom(): boolean {
  const threshold = 150;
  const scrollTop=this.scrollContainer.scrollTop;
  const offsetHeight=this.scrollContainer.offsetHeight
  const position = this.scrollContainer.scrollTop + this.scrollContainer.offsetHeight;
  const height = this.scrollContainer.scrollHeight;
  const scrollHeight = this.scrollContainer.scrollHeight
  console.log({scrollTop,offsetHeight,position,scrollHeight})
  return position > height - threshold;
}

scrolled(event: any): void {
  this.isNearBottom = this.isUserNearBottom();
}

// Uncomment these lines, you you need to scroll the full window.
// Make sure, to remove 'position: absolute;' from the CSS to test that behaviour.
/*
private scrollToBottom(): void {
  window.scroll({
    top: this.scrollContainer.scrollHeight,
    left: 0,
    behavior: 'smooth'
  });
}

private isUserNearBottom(): boolean {
  const threshold = 150;
  const position = window.scrollY + window.innerHeight;
  const height = document.body.scrollHeight;
  return position > height - threshold;
}

@HostListener('window:scroll', ['$event'])
scrolled(event: any): void {
  this.isNearBottom = this.isUserNearBottom();
}*/


onScroll(event) {
  const tracker = event.target;
  const limit = tracker.scrollHeight - tracker.clientHeight;
  if (event.target.scrollTop === limit) {
    alert('Bottom reached');
  }
}
}
