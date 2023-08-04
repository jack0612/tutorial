import { Component, OnInit } from '@angular/core';


interface ICargo {
  calculateCargoCost(): number;
}
interface ICargoDecorator extends ICargo {
  cargo: ICargo;
}

class CargoBaseFee implements ICargo {
  calculateCargoCost() {
    return 1000;
  }
}

class CargoWithFruit implements ICargoDecorator {
  private pricePerKg: number;
  private weight: number;
  private name: string;
  cargo: ICargo;

  constructor(priceKg: number, wt: number, nm: string, cargo: ICargo) {
    this.pricePerKg = priceKg;
    this.weight = wt;
    this.name = nm;
    this.cargo = cargo;
  }

  getPricePerKg(): number {
    return this.pricePerKg;
  }

  getWeight(): number {
    return this.weight;
  }

  getName(): string {
    return this.name;
  }

  private ownCost(): number {
    let cost: number = this.getPricePerKg() * this.getWeight();
    return cost;
  }

  calculateCargoCost(): number {
    return this.cargo.calculateCargoCost() + this.ownCost();
  }

}

class CargoWithBook implements ICargoDecorator {
  private price: number;
  private isbnNumber: string;
  cargo: ICargo;

  constructor(cost: number, isbn: string, cargo: ICargo) {
    this.price = cost;
    this.isbnNumber = isbn;
    this.cargo = cargo;
  }

  getPrice(): number {
    return this.price;
  }

  getIsbnNumber(): string {
    return this.isbnNumber;
  }


  private ownCost() {
    let cost: number = 0;
    //apply 5$ discount if book price is greater than 50
    if (this.getPrice() > 50) {
      cost = this.getPrice() - 5;
    }
    else
      cost = this.getPrice();
    return cost;
  }


  calculateCargoCost() {
    return this.cargo.calculateCargoCost() + this.ownCost();
  }
}

class CargoClient {

  public static main() {
    let cargo: ICargo = new CargoBaseFee();


    cargo = new CargoWithBook(20, "1234", cargo);

    cargo = new CargoWithBook(100, "5678", cargo);

    cargo = new CargoWithFruit(10, 2, "Banana", cargo);

    cargo = new CargoWithFruit(5, 5, "Apple", cargo);
    let fee = cargo.calculateCargoCost();
    console.log("cargo Cost = " + fee);
  }

}

@Component({
  selector: 'decorator',
  template: 'decorator pattern',

})
export class DecoratorPattern implements OnInit {

  constructor() { 
    console.log('DecoratorPattern')
    CargoClient.main();
  }

  ngOnInit(): void {

  }

}
