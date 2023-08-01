import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators'
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.scss']
})
export class RefreshComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
      .subscribe(event => {
        if (
            event.id === 1
          //&& event.url === event.urlAfterRedirects
        ) {
        // here your code when page is refresh
        //console.log('111111111111111111 page refreshed', event.url)
      }
})
  }

}
