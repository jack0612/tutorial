import { Component } from '@angular/core';
 

import { Storage } from './storage-decorator/storage.decorator';
 
@Component({
    selector: 'storage',
    template: `
  {{ name }} 
<p>Accessing Storage API</p>
<p>Value: {{itemNumber}}</p>
<button (click)="setData()">Set data</button>
<button (click)="clear()">Clear</button>
  `

})
export class StorageComponent {
    name = 'Angular';

    @Storage<number>('limitNum', null, 0)
    itemNumber: number = 10;

    setData(): void {
        this.itemNumber = 100;
    }

    clear(): void {
        this.itemNumber = null;
    }
}
