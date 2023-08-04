import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
//https://indepth.dev/posts/1376/bring-reactivity-to-your-angular-templates-with-the-letdirective-part-2
@Component({
  selector: 'app-let-directive',
  templateUrl: './let-directive.component.html',
  styleUrls: ['./let-directive.component.scss']
})
export class LetDirectiveComponent  {

  signal$ = new Subject<number>();
  stubError = new Error("BOOM!");
  trigger=false;
  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  random() {
    return Math.random();
  }

  setTrigger(){
    this.trigger=true;
    console.log('setTrigger')
 
  }

  clearTrigger(){
    this.trigger=false;
  }

}
