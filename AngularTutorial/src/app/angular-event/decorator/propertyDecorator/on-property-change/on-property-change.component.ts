import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { OnPropertyChange } from './on-property-change.decorator';

@Component({
  selector: 'on-property-change',
  template: `
    <h1>Property Decorator Example</h1>
    <h2>Hello {{name}}!!!</h2>
    <div>Greetings: {{greetings}}</div>`,
  styles: [`h1 { font-family: Lato; border-top: 1px solid #CCCCCC;}`]
})
export class OnPropertyChangeComponent {

  public greetings: string = '';

  @Input() 
  @OnPropertyChange('onNameChange') //Property decorator
  name: string;   //it is key in decorator

  onNameChange(newName: string) {
    this.greetings = newName + '!!!!!';
  }
}
