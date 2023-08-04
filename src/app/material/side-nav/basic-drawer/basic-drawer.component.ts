import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-drawer',
  templateUrl: './basic-drawer.component.html',
  styleUrls: ['./basic-drawer.component.scss']
})
export class BasicDrawerComponent implements OnInit {
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

}
