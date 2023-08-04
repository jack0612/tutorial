import { Component, OnInit } from '@angular/core';
/*
https://stackoverflow.com/questions/42108217/how-to-use-trackby-with-ngfor
default:
  const trackByIdentity = (index: number, item: any) => item;
//https://medium.com/@jinalshah999/trackby-with-ngfor-directives-in-angular-application-bd4d0db288eb
//trackBy is to reduce DOM manipulation when adding a new item or removing an existing item which may trigger several DOM manipulations.
*/
@Component({
  selector: 'app-ng-for-track-by',
  templateUrl: './ng-for-track-by.component.html',
  styleUrls: ['./ng-for-track-by.component.scss']
})
export class NgForTrackByComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setInterval( () => {
      this.list.length = 0;
      this.list.push({name: 'Gustavo'});
      this.list.push({name: 'Costa'});
    }, 2000);
  }

  list:any=[];

  identify(index, item){
     return item.name; 
  }

}
