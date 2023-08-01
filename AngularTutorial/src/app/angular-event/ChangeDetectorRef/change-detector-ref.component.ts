import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//https://www.digitalocean.com/community/tutorials/angular-change-detection-strategy
@Component({
  selector: 'app-change-detector-ref',
  templateUrl: './change-detector-ref.component.html',
  styleUrls: ['./change-detector-ref.component.scss']
})
export class ChangeDetectorRefComponent implements OnInit {
  foods = ['Bacon', 'Lettuce', 'Tomatoes'];
  constructor() { }

  ngOnInit(): void {

  }

  addFood(food) {
    console.log('addFood', new Date().getTime())
    //this.foods.push(food);
    this.foods = [...this.foods, food]
  }
  fruits = new BehaviorSubject(['Mengo', 'Orange', 'Banana']);
  addFruit(item) {
    console.log('addFruit', new Date())
    this.fruits.next(item);
  }

}
