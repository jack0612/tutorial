import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
//https://www.tektutorialshub.com/angular/using-switchmap-in-angular/
@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /*
    this.activatedRoute.paramMap
    .pipe(
      switchMap((params: Params) => {
        return this.service.getProduct(params.get('id'))
      }
      ))
    .subscribe((product: Product) => this.product = product);
    */

    /*
this.mainForm.get("productCode").valueChanges
.pipe(
  debounceTime(700),
  switchMap(val => {
    return this.queryDepositData();
  })
)
.subscribe(data => {
  this.product=data;
})
    */
  }

}
