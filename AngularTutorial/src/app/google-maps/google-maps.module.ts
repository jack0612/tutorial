import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyGoogleMapsComponent } from './google-maps.component';
import { GoogleMapsExampleComponent } from './google-maps-example/google-maps-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { FitMapToMarkersComponent } from './fit-map-to-markers/fit-map-to-markers.component';
import { StartWithStreetViewComponent } from './start-with-street-view/start-with-street-view.component';
import { MyDirectionsRendererComponent } from './my-directions-renderer/my-directions-renderer.component';
import { RouterModule, Routes } from '@angular/router';
import { MyMapBicyclingLayerComponent } from './my-map-bicycling-layer/my-map-bicycling-layer.component';
import { MyMapMarkerClusterComponent } from './my-map-marker-cluster/my-map-marker-cluster.component';
import { MyMapCircleComponent } from './my-map-circle/my-map-circle.component';
export const routes: Routes = [
  {
    path: 'google-maps',
    component: MyGoogleMapsComponent,
    children: [
      { path: 'googleMaps', component: GoogleMapsExampleComponent },
      { path: 'fitMapToMarkers', component: FitMapToMarkersComponent },
      { path: 'startWithStreetView', component: StartWithStreetViewComponent },
      { path: 'mapDirectionsRenderer', component: MyDirectionsRendererComponent },
      { path: 'mapBicyclingLayer', component: MyMapBicyclingLayerComponent },
      { path: 'mapMarkerCluster', component: MyMapMarkerClusterComponent },
      { path: 'mapCircle', component: MyMapCircleComponent },
      
    ]
  }
];


@NgModule({
  declarations: [MyGoogleMapsComponent, GoogleMapsExampleComponent, FitMapToMarkersComponent,
    StartWithStreetViewComponent, MyDirectionsRendererComponent, MyMapBicyclingLayerComponent, MyMapMarkerClusterComponent, MyMapCircleComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    GoogleMapsModule,
    RouterModule.forChild(routes),
  ],
  exports: [MyGoogleMapsComponent, RouterModule]
})
export class MyGoogleMapsModule { }
