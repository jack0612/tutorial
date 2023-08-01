import { Component } from '@angular/core';

interface ICommand {
  execute(): void;
}

class StockReceiver {
  private name = "ABC";
  private quantity = 10;
  buy() {
    console.log("Stock [ Name: " + this.name + ", Quantity: " + this.quantity + " ]bought");
  }
  sell() {
    console.log("Stock [ Name: " + name + ",  Quantity: " + this.quantity + " ]sold");
  }
}

class BuyStockCommand implements ICommand {
  private receiver: StockReceiver;
  constructor(abcStock: StockReceiver) {
    this.receiver = abcStock;
  }
  execute() {
    this.receiver.buy();
  }
}

class SellStockCommand implements ICommand {
  private receiver: StockReceiver;
  constructor(abcStock: StockReceiver) {
    this.receiver = abcStock;
  }
  execute() {
    this.receiver.sell();
  }
}

class BrokerInvoker {
  private commands: ICommand[] = [];
  takeOrder(command: ICommand) {
    this.commands.push(command);
  }
  placeOrders() {
    for (const command of this.commands) {
      command.execute();
    }
    this.commands = [];
  }
}

class CommandPatternClient {
  public static main() {
    const receiver = new StockReceiver();

    const buyStockCommand = new BuyStockCommand(receiver);
    const sellStockCommand = new SellStockCommand(receiver);

    const invoker = new BrokerInvoker();
    invoker.takeOrder(buyStockCommand);
    invoker.takeOrder(sellStockCommand);

    invoker.placeOrders();
  }
}

@Component({
  selector: 'command',
  template: 'command pattern'
})
export class CommandPattern {

  constructor() {
    CommandPatternClient.main();
  }

}
