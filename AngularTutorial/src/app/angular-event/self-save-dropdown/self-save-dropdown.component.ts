import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-save-dropdown',
  templateUrl: './self-save-dropdown.component.html',
  styleUrls: ['./self-save-dropdown.component.scss']
})
export class SelfSaveDropdownComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private http: HttpClient) {}
  // Done for demo purpose only. Use a service to talk to APIs
  post(): Function {
    return () => {
      return this.http.post('https://jsonplaceholder.typicode.com/posts', {});
    };
  }

}
