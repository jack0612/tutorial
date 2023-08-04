import { Directive, Component } from '@angular/core';
//https://www.talkinghightech.com/en/typescript-visitor-pattern/
//The main idea of the pattern is to expose your class to a Visitor that can observe your structure and 
//apply different methods 
//to it without modifying the object it is visiting.
interface IVisitor {
  visitElementBook(book: ElementBook): number;
  visitElementFruit(fruit: ElementFruit): number;
}

interface IElement {
  accept(visitor: IVisitor): number;
}


class ElementBook implements IElement {
  private price: number;
  private isbnNumber: string;

  constructor(cost: number, isbn: string) {
    this.price = cost;
    this.isbnNumber = isbn;
  }

  getPrice(): number {
    return this.price;
  }

  getIsbnNumber(): string {
    return this.isbnNumber;
  }


  accept(visitor: IVisitor): number {
    return visitor.visitElementBook(this);
  }

}

class ElementFruit implements IElement {
  private pricePerKg: number;
  private weight: number;
  private name: string;

  constructor(priceKg: number, wt: number, nm: string) {
    this.pricePerKg = priceKg;
    this.weight = wt;
    this.name = nm;
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

  accept(visitor: IVisitor): number {
    return visitor.visitElementFruit(this);
  }

}



class CostCalculationVisitor implements IVisitor {
  constructor() { };
  visitElementBook(book: ElementBook): number {
    let cost: number = 0;
    //apply 5$ discount if book price is greater than 50
    if (book.getPrice() > 50) {
      cost = book.getPrice() - 5;
    }
    else
      cost = book.getPrice();

    console.log("Book ISBN::" + book.getIsbnNumber() + " cost =" + cost);
    return cost;
  }
  visitElementFruit(fruit: ElementFruit): number {
    let cost: number = fruit.getPricePerKg() * fruit.getWeight();
    console.log(fruit.getName() + " cost = " + cost);
    return cost;
  }
}

class ShipmentVisitor implements IVisitor {
  constructor() { };
  visitElementBook(book: ElementBook): number {
    console.log('ship book', book.getIsbnNumber());
    return 0;
  }
  visitElementFruit(fruit: ElementFruit): number {
    console.log('ship fruit', fruit.getName())
    return 0;
  }
}

class VisitorPatternClient {
  public static main() {
    const items: IElement[] = [];
    items.push(new ElementBook(20, "1234"));
    items.push(new ElementBook(100, "5678"));
    items.push(new ElementFruit(10, 2, "Banana"));
    items.push(new ElementFruit(5, 5, "Apple"));
    let visitor: IVisitor = new CostCalculationVisitor();
    let sum: number = 0;
    for (let item of items) {
      sum = sum + item.accept(visitor);
    }
    console.log('sum:', sum)

    visitor = new ShipmentVisitor();
    for (let item of items) {
      item.accept(visitor);
    }
  }

}

@Component({
  selector: 'visitor',
  template: 'visitor pattern'
})
export class VisitorPattern {

  constructor() {
    VisitorPatternClient.main();
  }

}
