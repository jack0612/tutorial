import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { LifeCycleComponent } from '../life-cycle.component';
@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.scss']
})
export class LifeCycleChildComponent implements OnInit {
  @Input('inputTest') inputTest;

  private print = false;

  constructor(private parent: LifeCycleComponent, private cdf: ChangeDetectorRef) {
    this.print && console.log(`        child new - data is ${this.inputTest}`);
  }

  ngOnChanges() {
    this.print && this.print && console.log(`        child ngOnChanges - data is ${this.inputTest}`);
    //this.parent.title='iiii' //will generate  ExpressionChangedAfterItHasBeenCheckedError
  }

  ngOnInit() {
    this.print && console.log(`        child ngOnInit  - data is ${this.inputTest}`);
    // this.parent.title='iiii' //will generate  ExpressionChangedAfterItHasBeenCheckedError
  }

  ngDoCheck() {
    this.print && console.log("        child ngDoCheck")
    // this.parent.title='dddd' //will generate  ExpressionChangedAfterItHasBeenCheckedError
  }

  ngAfterContentInit() {
    this.print && console.log("        child ngAfterContentInit");
    // this.parent.title='bbbb' //will generate  ExpressionChangedAfterItHasBeenCheckedError
  }

  ngAfterContentChecked() {
    this.print && console.log("        child ngAfterContentChecked");
    // this.parent.title='aaaaaaaa' //will generate  ExpressionChangedAfterItHasBeenCheckedError
  }

  ngAfterViewInit() {
    this.print && console.log("        child ngAfterViewInit");
    //this.parent.title='aaaaaaaa' //will generate  ExpressionChangedAfterItHasBeenCheckedError
    //this.cdf.detectChanges(); //this will not solve problem
    timer(0).subscribe(() => {
      this.parent.title = 'aaaaaaaa' //will NOT generate  ExpressionChangedAfterItHasBeenCheckedError
    });
  }

  ngAfterViewChecked() {
    this.print && console.log("        child ngAfterViewChecked");

  }

  ngOnDestroy() {
    this.print && console.log("        child ngOnDestroy");
  }

}
