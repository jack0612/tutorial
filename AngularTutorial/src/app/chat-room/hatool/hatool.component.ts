import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContentManager, ScriptRunnerImpl } from 'hatool';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-hatool',
  templateUrl: './hatool.component.html',
  styleUrls: ['./hatool.component.scss']
})
export class HatoolComponent implements OnInit {
 

  
  content = new ContentManager();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

}
