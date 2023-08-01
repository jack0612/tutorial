import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a11y-describedby',
  templateUrl: './a11y-describedby.component.html',
  styleUrls: ['./a11y-describedby.component.scss']
})
export class A11yDescribedbyComponent implements OnInit {
  isLive = false;
  constructor() { }

  ngOnInit(): void {
  }

  changeAriaLive() {
    this.isLive = !this.isLive;
  }

}
