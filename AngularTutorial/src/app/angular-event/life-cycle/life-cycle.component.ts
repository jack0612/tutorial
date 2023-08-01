import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
})
export class LifeCycleComponent implements OnInit {
  title='LifeCycleComponent'
  inputTest=new Date().toISOString();
  private print=false;
  changeInputTest(){
    this.inputTest=new Date().toISOString();
  }

  constructor() {
    this.print && console.log(`parent constructor`);
  }

  ngOnChanges() {
    this.print && console.log(`parent ngOnChanges  `);
  }

  ngOnInit() {
    this.print && console.log(`parent ngOnInit  `);
  }

  ngDoCheck() {
    this.print && console.log("parent ngDoCheck")
  }

  ngAfterContentInit() {
    this.print && console.log("parent ngAfterContentInit");
  }

  ngAfterContentChecked() {
    this.print && console.log("parent ngAfterContentChecked");
  }

  ngAfterViewInit() {
    this.print && console.log("parent ngAfterViewInit");
  }

  ngAfterViewChecked() {
    this.print && console.log("parent ngAfterViewChecked");
  }

  ngOnDestroy() {
    this.print && console.log("parent ngOnDestroy");
  }

}

/*
parent ngOnInit  
27 parent ngDoCheck
31 parent ngAfterContentInit
35 parent ngAfterContentChecked
:16         child ngOnChanges - data is 2021-08-28T14:57:10.147Z
:20         child ngOnInit  - data is 2021-08-28T14:57:10.147Z
:24         child ngDoCheck
:28         child ngAfterContentInit
:32         child ngAfterContentChecked
:36         child ngAfterViewInit
:40         child ngAfterViewChecked
39 parent ngAfterViewInit
43 parent ngAfterViewChecked

27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked

27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked

27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked

27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked

27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked
27 parent ngDoCheck
35 parent ngAfterContentChecked
:24         child ngDoCheck
:32         child ngAfterContentChecked
:40         child ngAfterViewChecked
43 parent ngAfterViewChecked

*/
