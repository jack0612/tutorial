import { MapsAPILoader, LatLngLiteral, LatLng } from '@agm/core';

import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { IMapMarker } from '../model/map-marker.interface';

//https://softtechdiary.com/angular-google-maps-agm-complete-guide-tutorial/
// just an interface for type safety.

declare var google: any;
@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss']
})
export class MarkerComponent implements OnInit {
  title = 'My first AGM project';

  // lat = 51.678418;
  // lng = 7.809007;
  // zoom: number = 8;
  // constructor() { }

  // ngOnInit(): void {
  // }

  // onClickMarker(label: string, index: number) {
  //   console.log(`clicked the marker: ${label || index}`)
  // }
  // centerChange() {

  // }
  // mapReady() {

  // }

  // markers = [
  //   {
  //     lat: 51.673858,
  //     lng: 7.815982,
  //     label: "A",
  //     draggable: true
  //   },
  //   {
  //     lat: 51.373858,
  //     lng: 7.215982,
  //     label: "B",
  //     draggable: false
  //   },
  //   {
  //     lat: 51.723858,
  //     lng: 7.895982,
  //     label: "C",
  //     draggable: true
  //   }
  // ];

  @ViewChild("search", { static: false }) searchElementRef: ElementRef;
  name = "Angular ";

  map_zoom: number = 4;
  clulster_max_zoom = 4;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  minClusterSize = 2;
  openedWindow: number = -1;
  centerLatitude = this.lat;
  centerLongitude = this.lng;
  origin: LatLngLiteral;
  destination: LatLngLiteral;
  waypoints: { [location: string]: LatLngLiteral }[] = [];
  circleCenter: LatLngLiteral;
  mapOptions = {
    styles: [
      {
        url: "./assets/images/cluster.png",
        width: 70,
        height: 50,
        textColor: "rED",
        fontWeight: "bold",
        textSize: "14px",
        fontFamily: "nunito",
        lineHeight: "12px",
        paddingTop: "8px",
        backgroundSize: "cover"
      }
    ],
    calculator: markers => {
      for (let i = 0; i < markers.length; i++) {
        // you have access all the markers from each cluster
      }
      return {
        text: markers.length + " MARKERS",
        index: 1
      };
      // index: 1 -> for green icon
      // index: 2 -> for red icon
    }
  };
  markers = new BehaviorSubject<any[]>(null);
  public searchControl: FormControl;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit(): void {
    //create search FormControl
    this.searchControl = new FormControl();
    this.searchControl.setValue("EUROPE");
    //set current position
    //this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement,
        {
          types: ["address"]
        }
      );
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.map_zoom = 12;
        });
      });
    });

    let items: IMapMarker[] = [
      {
        lat: 51.673858,
        lng: 7.815982,
        label: "A",
        event_info: "info of A",
        draggable: false
      },
      {
        lat: 51.373858,
        lng: 7.215982,
        label: "B",
        event_info: "info of B",
        draggable: false
      },
      {
        lat: 51.723858,
        lng: 7.895982,
        label: "C",
        event_info: "info of C",
        draggable: false
      },
      {
        lat: 53.723858,
        lng: 8.895982,
        label: "D",
        event_info: "info of D",
        draggable: false
      },
      {
        lat: 54.723858,
        lng: 12.895982,
        label: "E",
        event_info: "info of E",
        draggable: false
      },
      {
        lat: 21.723858,
        lng: 75.895982,
        label: "F",
        event_info: "info of F",
        draggable: false
      },
      {
        lat: 41.723858,
        lng: 32.895982,
        label: "G",
        event_info: "info of G",
        draggable: false
      },
      {
        lat: 55.723858,
        lng: 34.895982,
        label: "H",
        event_info: "info of H",
        draggable: false
      },
      {
        lat: 56.723858,
        lng: 45.895982,
        label: "I",
        event_info: "info of I",
        draggable: false
      },
      {
        lat: 59.723858,
        lng: 75.895982,
        label: "J",
        event_info: "info of J",
        draggable: false
      }
    ];
    this.markers.next(items);
    this.origin = { lat: items[0].lat, lng: items[0].lng };
    const last = 2;//items.length - 1;
    this.destination = { lat: items[last].lat, lng: items[last].lng };
    for (let i = 1; i < last; i++) {
      this.waypoints.push({ location: { lat: items[i].lat, lng: items[i].lng } });
    }
    this.circleCenter = this.origin;
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map_zoom = 12;
      });
    }
  }

  onCenterChange(coords: LatLngLiteral) {
    //console.log(event);
    this.centerLatitude = coords.lat;
    this.centerLongitude = coords.lng;
  }



  onMapClick($event: MouseEvent) {
    // this.markers.push({
    //     lat: $event.coords.lat,
    //     lng: $event.coords.lng,
    //     draggable: true
    //   }); 

  }

  onMarkerDragEnd(m: IMapMarker, $event: MouseEvent) {
    console.log("dragEnd", m, $event);
  }
  onMapReady(map) {
    map.setOptions({
      zoomControl: "true",
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
      }
    });
    //this.loader = true;
    map.addListener("dragend", () => {
      //console.log(this.centerLatitude, this.centerLongitude)
      // do something with centerLatitude/centerLongitude
      //api call to load dynamic marker for your application
      // this.loader = false;
    });

    const centerControlDiv = document.createElement("div");
    const centerControl = this.createCenterControl(map);
    centerControlDiv.appendChild(centerControl);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

  }

  onClickMarker(label: string, index: number) {
    this.openedWindow = index;
    console.log(`clicked the marker: ${label || index}`);
  }
  onMouseOverMarker(marker, i, $event) {

  }
  onMouseOutMarker(marker, i, $event) {

  }

  isInfoWindowOpen(id) {
    return this.openedWindow == id; // alternative: check if id is in array
  }

  profileClicked() { }
  logout() { }

   createCenterControl(map) {
    const controlButton = document.createElement("button");
  
    // Set CSS for the control.
    controlButton.style.backgroundColor = "#fff";
    controlButton.style.border = "2px solid #fff";
    controlButton.style.borderRadius = "3px";
    controlButton.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlButton.style.color = "rgb(25,25,25)";
    controlButton.style.cursor = "pointer";
    controlButton.style.fontFamily = "Roboto,Arial,sans-serif";
    controlButton.style.fontSize = "16px";
    controlButton.style.lineHeight = "38px";
    controlButton.style.margin = "8px 0 22px";
    controlButton.style.padding = "0 5px";
    controlButton.style.textAlign = "center";
  
    controlButton.textContent = "Center Map Button";
    controlButton.title = "Click to recenter the map";
    controlButton.type = "button";
  
    // Setup the click event listeners: simply set the map to Chicago.
    // controlButton.addEventListener("click", () => {
    //   map.setCenter(chicago);
    // });
  
    return controlButton;
  }

}
