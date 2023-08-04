import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { MarkerComponent } from './marker/marker.component';
import { AgmComponent } from './agm.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { VisitorMarkerMapComponent } from './visitor-marker/map/map.component';
import { VisitorMarkerComponent } from './visitor-marker/visitor-marker.component'
import { ShowRouteService } from './visitor-marker/model/visitor-pattern/show-route.service';
import { MapLoaderService } from './visitor-marker/map-loader.service';
import { CircleComponent } from './circle/circle.component';
/*need to install
    "@agm/core": "^1.1.0",
    "@agm/js-marker-clusterer": "^1.1.0",
    "@agm/snazzy-info-window": "^3.0.0-beta.0",
    "js-marker-clusterer": "^1.0.0",
    "snazzy-info-window": "^1.1.1",
*/

@NgModule({
  declarations: [
    MarkerComponent,
    AgmComponent,
    VisitorMarkerMapComponent,
    VisitorMarkerComponent,
    CircleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      //apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
      apiKey: 'AIzaSyCxVyN24mx-gTQWRpDQ7JHzI5tZmpAnuuQ',
      language: "en",
      libraries: ['places', 'geometry']
    }),
    AgmDirectionModule,
    AgmJsMarkerClustererModule,
    AgmSnazzyInfoWindowModule,
  ],
  providers: [MapLoaderService, ShowRouteService],
  exports: [AgmComponent]
})
export class AgmModule { }
