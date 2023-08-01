import { Component, OnInit } from '@angular/core';
//https://www.youtube.com/watch?v=oUSvlrDTLi4
//jquery: https://www.youtube.com/watch?v=iYpAEthzjtw
@Component({
  selector: 'app-scroll-smoothly',
  templateUrl: './scroll-smoothly.component.html',
  styleUrls: ['./scroll-smoothly.component.scss']
})
export class ScrollSmoothlyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    window.scrollTo(0, distance)
    console.log({ target, targetPosition, startPosition })
  }

  ngAfterViewInit() {
    this.smoothScroll('.section1', 1000)
    this.smoothScroll('.section2', 1000)
  }

}
