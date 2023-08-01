import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { timer } from 'rxjs';
import { MapOperator } from 'rxjs/internal/operators/map';
//https://medium.com/swlh/angular-google-map-component-basics-and-tips-7ff679e383ff
// it does not work
declare var google: any;
@Component({
  selector: 'app-fit-map-to-markers',
  templateUrl: './fit-map-to-markers.component.html',
  styleUrls: ['./fit-map-to-markers.component.scss']
})
export class FitMapToMarkersComponent implements OnInit {

  // zoom = 20;
  // options: google.maps.MapOptions = {
  //   zoomControl: false,
  //   scrollwheel: false,
  //   disableDoubleClickZoom: true,
  //   mapTypeId: 'hybrid',
  //   maxZoom: 22,
  //   minZoom: 1,
  // };

  // marker1 = { position: { lat: 38.9987208, lng: -77.2538699 } };
  // marker2 = { position: { lat: 39.7, lng: -76.0 } };
  // marker3 = { position: { lat: 37.9, lng: -76.8 } };

  // markers = [this.marker1, this.marker2, this.marker3];


  //@ViewChild(GoogleMap) map!: GoogleMap;

  @ViewChild('map', { static: true }) mapElementRef: ElementRef;
  ngOnInit(): void {
    mapFitBounds(this.mapElementRef.nativeElement);
  }

  ngAfterViewInit() {
    // const bounds = this.getBounds(this.markers, this.map);
    // console.log('map', this.map)
    // this.map.googleMap.fitBounds(bounds);
    timer(100).subscribe(() => {
      console.log('ngAfterViewInit')
      //this.loadMap();
      //initialize(this.mapElementRef.nativeElement);
     
    })

  }

  //https://stackoverflow.com/questions/27481184/angular-google-maps-automatically-set-center-and-zoom-to-fit-in-all-marker
  private getBounds(markers, map: GoogleMap) {
    // let north;
    // let south;
    // let east;
    // let west;

    // for (const marker of markers) {
    //   // set the coordinates to marker's lat and lng on the first run.
    //   // if the coordinates exist, get max or min depends on the coordinates.
    //   north = north !== undefined ? Math.max(north, marker.position.lat) : marker.position.lat;
    //   south = south !== undefined ? Math.min(south, marker.position.lat) : marker.position.lat;
    //   east = east !== undefined ? Math.max(east, marker.position.lng) : marker.position.lng;
    //   west = west !== undefined ? Math.min(west, marker.position.lng) : marker.position.lng;
    // };

    // const bounds = { north, south, east, west };
    // console.log('bounds', bounds)
    // var bounds = new google.maps.LatLngBounds();
    // for (var i in markers) // your marker list here
    //   bounds.extend(markers[i].position) // your marker position, must be a LatLng instance

    var bounds: google.maps.LatLngBounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markers.length; i++) {
      // var data = markers[i].position
      // var myLatlng = new google.maps.LatLng(data.lat, data.lng);
      // var marker = new google.maps.Marker({
      //   position: myLatlng,
      //   map: map,
      // });
      bounds.extend(markers[i].position);
    }
    console.log('bounds', bounds)
    console.log('center', bounds.getCenter())
    const position = { lat: bounds.getCenter().lat(), lng: bounds.getCenter().lng() };
    console.log('center position', position)
    map.googleMap.setCenter(bounds.getCenter());
    map.googleMap.fitBounds(bounds);
    return bounds;
  }

  private loadMap() {
    var markers = [
      {
        "title": 'Aksa Beach',
        "lat": '19.1759668',
        "lng": '72.79504659999998',
        "description": 'Aksa Beach is a popular beach and a vacation spot in Aksa village at Malad, Mumbai.'
      },
      {
        "title": 'Juhu Beach',
        "lat": '19.0883595',
        "lng": '72.82652380000002',
        "description": 'Juhu Beach is one of favourite tourist attractions situated in Mumbai.'
      },
      {
        "title": 'Girgaum Beach',
        "lat": '18.9542149',
        "lng": '72.81203529999993',
        "description": 'Girgaum Beach commonly known as just Chaupati is one of the most famous public beaches in Mumbai.'
      },
      {
        "title": 'Jijamata Udyan',
        "lat": '18.979006',
        "lng": '72.83388300000001',
        "description": 'Jijamata Udyan is situated near Byculla station is famous as Mumbai (Bombay) Zoo.'
      },
      {
        "title": 'Sanjay Gandhi National Park',
        "lat": '19.2147067',
        "lng": '72.91062020000004',
        "description": 'Sanjay Gandhi National Park is a large protected area in the northern part of Mumbai city.'
      }
    ];

    var mapOptions = {
      center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
      zoom: 10, //Not required.
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var infoWindow = new google.maps.InfoWindow();
    const element = this.mapElementRef.nativeElement;
    console.log('element', element)
    var map = new google.maps.Map(element, mapOptions);

    //Create LatLngBounds object.
    var latlngbounds = new google.maps.LatLngBounds();

    for (var i = 0; i < markers.length; i++) {
      var data = markers[i]
      var myLatlng = new google.maps.LatLng(data.lat, data.lng);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: data.title
      });
      (function (marker, data) {
        google.maps.event.addListener(marker, "click", function (e) {
          infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + data.description + map.getZoom() + "</div>");
          infoWindow.open(map, marker);
        });
      })(marker, data);

      //https://codesandbox.io/s/google-maps-zoom-map-to-fit-markers-9tg4n?file=/src/index.js:984-1107
      //Extend each marker's position in LatLngBounds object.
      latlngbounds.extend(myLatlng);
    }

    //Get the boundaries of the Map.
    var bounds = new google.maps.LatLngBounds();
    console.log('latlngbounds', latlngbounds)
    //Center map and adjust Zoom based on the position of all markers.
    map.setCenter(latlngbounds.getCenter());
    map.setZoom(10);
    map.fitBounds(latlngbounds);
  }
}

//http://jsfiddle.net/gaby/22qte/
//https://codepen.io/Ozgur/pen/KOPaWV
function initialize(element) {
  var myOptions = {
    center: new google.maps.LatLng(45.4555729, 9.169236),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,

    panControl: true,
    mapTypeControl: false,
    panControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.RIGHT_CENTER
    },
    scaleControl: false,
    streetViewControl: false,
    streetViewControlOptions: {
      position: google.maps.ControlPosition.RIGHT_CENTER
    }
  };
  var map = new google.maps.Map(element, myOptions);



  var Item_1 = new google.maps.LatLng(45.5983128, 8.9172776);

  var myPlace = new google.maps.LatLng(45.4555729, 9.169236);

  var marker = new google.maps.Marker({
    position: Item_1,
    map: map
  });

  var marker = new google.maps.Marker({
    position: myPlace,
    map: map
  });

  var bounds = new google.maps.LatLngBounds();
  bounds.extend(myPlace);
  bounds.extend(Item_1);
  map.fitBounds(bounds);

}
//https://codepen.io/Ozgur/pen/KOPaWV
function mapFitBounds(element) {
  var ledbury = new google.maps.LatLng(52.0339, -2.42357);
  var malvern = new google.maps.LatLng(52.106834, -2.3305105);
  var bounds = new google.maps.LatLngBounds();

  var mapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(element, mapOptions);

  var pin1 = new google.maps.Marker({
    position: ledbury,
    map: map,
    zIndex: 1,
    optimized: false
  });
  bounds.extend(pin1.getPosition());
  map.fitBounds(bounds);

  var pin2 = new google.maps.Marker({
    position: malvern,
    map: map,
    zIndex: 2,
    optimized: false
  });
  bounds.extend(pin2.getPosition());
  map.fitBounds(bounds);
  console.log(bounds);
//   _.cg
// Ia
// : 
// Xf {lo: -2.42357, hi: -2.3305105}
// Wa
// : 
// ag {lo: 52.0339, hi: 52.106834}
// _.Yf
// Ha
// : 
// Tf {lo: -2.42357, hi: -2.3305105}
// eb
// : 
// Xf {lo: 52.0339, hi: 52.106834}
// [[Prototype]]
// : 
// Object
}
