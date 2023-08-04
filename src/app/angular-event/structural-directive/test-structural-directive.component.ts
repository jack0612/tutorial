import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-structural-directive',
  templateUrl: './test-structural-directive.component.html',
  styleUrls: ['./test-structural-directive.component.scss']
})
export class TestStructuralDirectiveComponent implements OnInit {
  authorized = true;
  myObject = {
    a: 'one',
    b: 'two',
    c: 'three'
  }
  constructor() {
    console.log('TestStructuralDirectiveComponent.constructor')
  }

  ngOnInit(): void {
  }

  buttonClick(){
    this.authorized = !this.authorized
    console.log('buttonClick',this.authorized)
  }

  ngDestroy() {
    console.log('TestStructuralDirectiveComponent.ngDestroy')
  }

}
