import { Component, Input, OnChanges, SimpleChanges, VERSION } from '@angular/core';


import { TrackChanges } from './track-changes.decorator';

@Component({
    selector: 'hello',
    template: `
    <h1>Hello {{name}}!</h1>
    <p>Item 1: {{data.item1}}</p>
    <p>Item 2: {{data.item2}}</p>
  `,
    styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnChanges {
    @Input() name: string;

    @Input() val1: number;

    @Input() val2: number;

    data = {
        item1: null,
        item2: null
    }

    @TrackChanges<number>('val1', 'parseVal1')
    @TrackChanges<number>('val2', 'parseVal2')
    ngOnChanges(changes: SimpleChanges): void { }

    parseVal1(val: number): void {
        this.data.item1 = Math.random() * val;
    }

    parseVal2(val: number): void {
        this.data.item2 = Math.random() * val;
    }
}


@Component({
    selector: 'track-changes',
    template: `
    <hello name="{{ name }}" [val1]="val1" [val2]="val2"></hello>
        <h3>{{subTitle}}</h3>
    `,
})
export class TrackChangesComponent {
    name = 'Angular ' + VERSION.major;

    subTitle = 'Tracking Changes';

    val1 = 100;

    val2 = 1000000;
}
