import { Directive, Component } from '@angular/core';

interface IImplementor {
    costCalculation(name: string, pricePerKg: number, weight: number, price: number): number;
    shipment(name: string): number;
}

abstract class IAbstraction {
    costImplementor: IImplementor;
    abstract feature();
}


class Book extends IAbstraction {
    private price: number;
    private isbnNumber: string;

    constructor(cost: number, isbn: string) {
        super();
        this.price = cost;
        this.isbnNumber = isbn;
    }

    getPrice(): number {
        return this.price;
    }

    getIsbnNumber(): string {
        return this.isbnNumber;
    }


    feature() {
        this.costImplementor.costCalculation(this.isbnNumber, 0, 0, this.price);
        this.costImplementor.shipment(this.isbnNumber);
    }

}

class Fruit extends IAbstraction {
    costImplementor: FruitCostImplementor;
    private pricePerKg: number;
    private weight: number;
    private name: string;

    constructor(priceKg: number, wt: number, nm: string) {
        super();
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

    feature() {
        this.costImplementor.costCalculation(this.name, this.pricePerKg, this.weight, 0);
        this.costImplementor.shipment(this.name);
    }


}



class BookCostImplementor implements IImplementor {
    constructor() { };
    costCalculation(name: string, pricePerKg: number, weight: number, price: number): number {
        let cost: number = 0;
        //apply 5$ discount if book price is greater than 50
        if (price > 50) {
            cost = price - 5;
        }
        else
            cost = price;

        console.log("Book ISBN::" + name + " cost =" + cost);
        return cost;
    }
    shipment(name: string): number {
        console.log('ship book', name);
        return 0;
    }

}

class FruitCostImplementor implements IImplementor {
    constructor() { };
    costCalculation(name: string, pricePerKg: number, weight: number, price: number): number {
        let cost: number = pricePerKg * weight;
        console.log(name + " cost = " + cost);
        return cost;
    }
    shipment(name: string): number {
        console.log('ship fruit', name)
        return 0;
    }
}

class BridgePatternClient {
    public static main() {
        let items: IAbstraction[] = [];
        items.push(new Book(20, "1234"));
        items.push(new Book(100, "5678"));
   
        let visitor: IImplementor = new BookCostImplementor();
        let sum: number = 0;
        for (let item of items) {
            sum = sum + item.feature();
        }
        console.log('sum:', sum)

        items = [];
        items.push(new Fruit(10, 2, "Banana"));
        items.push(new Fruit(5, 5, "Apple"));

        visitor = new FruitCostImplementor();
        for (let item of items) {
            sum = sum + item.feature();
        }
    }

}

@Component({
    selector: 'bridge',
    template: 'bridge pattern'
})
export class BridgePattern {

    constructor() {
        BridgePatternClient.main();
    }

}
