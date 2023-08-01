import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-only',
  templateUrl: './digital-only.component.html',
  styleUrls: ['./digital-only.component.scss']
})
export class DigitalOnlyComponent implements OnInit {

  amount: string;
  min = 0;
  max = 10;
  decimalPattern = new RegExp('[0-9]+([.][0-9]+)?');
  pattern = '';

  constructor() {}

  ngOnInit(): void {}
  watchAmountValue() {
    const value = Number(this.amount);
    this.amount = value.toFixed(2);
    console.log(this.amount);
  }

}
