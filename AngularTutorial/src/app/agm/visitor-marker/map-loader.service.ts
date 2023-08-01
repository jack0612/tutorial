// <reference types="@types/googlemaps" />

import {  Injectable, NgZone } from "@angular/core";
import { MapLoaderUtility } from "./map.loader-util";

import { BaseMap } from "./model/visitor-pattern/base.map";
import { MapOption } from "./model/visitor-pattern/map.option";

import { ICallback } from "./model/visitor-pattern/model/callback.interface";



declare var google: any;
@Injectable()
export class MapLoaderService extends BaseMap {
  googleAPIKey: string = "AIzaSyCxVyN24mx-gTQWRpDQ7JHzI5tZmpAnuuQ";
  markers = [];

  constructor(private _zone: NgZone) {
    super();
  }

  loadMap(fn?: ICallback<void>) {
    MapLoaderUtility.load(this.googleAPIKey).then(() => {
      if (typeof google !== "undefined") {
        console.log('map loaded')
        this._initMap();
        fn && fn();
      }
    });
  }

  private _initMap(): void {
    this.mapOption = new MapOption("Standard", null, "SG");
    this._zone.runOutsideAngular(() => {
      if (!this.serviceIsLoaded) {
        console.log('111 ',document.getElementById("map"))
        this.initBaseMap(document.getElementById("map"));
        this.serviceIsLoaded = true;
      }
    });
  }


}
