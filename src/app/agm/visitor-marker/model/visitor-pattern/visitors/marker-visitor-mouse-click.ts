import { IMarkerVisitor } from "./marker-visitor.interface";
import { PointMarker } from "../elements/point-marker-element";
import { StartLocationMarker } from "../elements/start-location-marker-element";
import { RealTimeLocationMarker } from "../elements/real-time-location-marker-element";
import { RouteApiService } from "../route-api.service";
import { CustomMarker } from "../elements/marker-element.interface";

export class MarkerVisitorMouseClick implements IMarkerVisitor {
  constructor(private routeApiService: RouteApiService) {}

  visitPointMarker(marker: PointMarker) {
    this.logMessage(marker);
  }

  visitStartLocation(marker: StartLocationMarker) {
    this.logMessage(marker);
  }

  visitRealTimeLocation(marker: RealTimeLocationMarker) {
    //You could call this method too 
    //marker.concreteMethodOfRealTimeLocation();
    this.logMessage(marker);    
  }

  logMessage(marker: CustomMarker<any>){
    this.routeApiService.sendMessage(`${marker.title} clicked`)
  }
}
