import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
//https://www.tektutorialshub.com/angular/using-throwerror-in-angular-observable/
@Component({
  selector: 'app-throw-error',
  templateUrl: './throw-error.component.html',
  styleUrls: ['./throw-error.component.scss']
})
export class ThrowErrorComponent implements OnInit {


  srcArray = from([1, 2, "A", 4]);
 
  obs = this.srcArray.pipe(
    map(val => {
      let result = (val as number) * 2;
      if (Number.isNaN(result)) {
        console.log("Error in the observable");
        //throw Error("Not a Number");
      }
      return result;
    })
  );
 
  ngOnInit() {
    this.obs.subscribe(
      el => {
        //console.log("Value Received :" + el);
      },
      err => {
        //console.log("Error caught at Subscriber :" + err);
        throw err;
      },
      () => console.log("Processing Complete.")
    );
  }
}
