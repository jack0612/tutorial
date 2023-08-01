import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, share, shareReplay, take } from 'rxjs/operators';
//https://itnext.io/the-magic-of-rxjs-sharing-operators-and-their-differences-3a03d699d255

//shareReplay(3) means that ReplaySubject will emit last 3 values and refCount will be false.
@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})

export class ShareReplayComponent implements OnInit {

  constructor(private http:HttpClient) { }
  user$;
  name$;
  age$;
  ngOnInit(): void {
    //this.data$ =  this._jokeService.getData().pipe(shareReplay(1));
    this.user$ = this.http.get(`api/user/1`).pipe(
      shareReplay(1),
      take(1),
    );
   this.name$ = this.user$.pipe(
      map(user => user['name'])
   );
   this.age$ = this.user$.pipe(
      map(user => user['age'])
   );
  }

  public clickButton(){
    //this.data$.subscribe();
   }

}
