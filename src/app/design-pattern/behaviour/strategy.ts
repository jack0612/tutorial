import { Component, Injector } from "@angular/core";
import { Injectable } from '@angular/core';
//https://blog.bitsrc.io/strategy-design-pattern-in-angular-c15a281aa9ab
@Component({
  selector: 'strategyPattern',
  template: `
  <h1>Strategy design Pattern</h1> 
  <mat-slide-toggle  color="primary" [checked]="true" (change)="toggleHandler($event.checked)">
   Compress Images
  </mat-slide-toggle> <br><br><br>
  <input type="file" accept="image/*" multiple="" id="file" (change)="uploadFile($event)" />
  `,
})



export abstract class Strategy {
  abstract processFiles(fileArray: File[]): void;
}

@Injectable({
  providedIn: 'any',
})
export class StrategyWithCompression extends Strategy {
  constructor() {
    super();
  }
  processFiles(filesArray: File[]): void {
    console.log('Processing with Compression');
  }
}

@Injectable({
  providedIn: 'any',
})
export class StrategyWithoutCompression extends Strategy {
  constructor() {
    super();
  }
  processFiles(filesArray: File[]): void {
    console.log('Processing without Compression');
  }
}

export const StrategyMap = new Map<boolean, any>([
  [true, StrategyWithCompression],
  [false, StrategyWithoutCompression],
]);

class StrategyFactory {
  static getStrategy(injector: Injector, isChecked: boolean): Strategy {
    return injector.get<Strategy>(StrategyMap.get(isChecked))
  }
}

export class AppComponent {

  strategy: Strategy;
  constructor(private injector: Injector) { }
  fileProcessingMode = 'Compressed';
  ngOnInit() {
    this.strategy = StrategyFactory.getStrategy(this.injector,true);
  }
  uploadFile(event) {
    const filesArray = Array.from((<HTMLInputElement>event.target).files);
    this.strategy.processFiles(filesArray);
  }
  toggleHandler(isChecked: boolean) {
    this.strategy =  StrategyFactory.getStrategy(this.injector,isChecked);
  }
}