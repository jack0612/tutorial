import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

//https://github.com/Mokkapps/angular-change-detection-demo
//markForCheck() will mark view and its ancestors as dirty,
@Component({
  selector: 'app-cdf-child',
  templateUrl: './cdf-child.component.html',
  styleUrls: ['./cdf-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CdfChildComponent {

  @Input() data: string[];
  isConsumer = false;

  constructor(private cd: ChangeDetectorRef) { }

  refresh() {
    //both of them will work
    //this.cd.detectChanges();
    this.cd.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges) {
    // const data=changes.data.currentValue;
    // const fruits=changes.fruits.currentValue;
    console.log(' changed',new Date().getTime());
    // if(data){
    //   console.log('data changed',new Date());
    // }
    
    // if(fruits){
    //   console.log('fruits changed',new Date());
    // }
  }

  @Input() fruits: Observable<any>;
  fruitList: string[] = [];

  ngOnInit() {
    //console.log('888888888 CdfChildComponent.ngOnInit')

    this.fruits.subscribe(item => {
      //console.log('receive item',item)
      this.fruitList = [...this.fruitList, item];
      //this.isConsumer=true;
      this.cd.detectChanges();
    });
  }

  //We added a check() method in each component, called in each template: it allows us to track if the component is checked or not.
  /*
  The first two work together: you can indicate to Angular to not care about the component
   with detach and then manually call detectChanges when you want the change detection to run.
   we can use the markForCheck method of ChangeDetectorRef to manually trigger the change detection in an OnPush component.
  */
  check() {
    //console.log('88888888888888888 CdfChildComponent component view checked');
  }

}
