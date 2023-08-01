import { PointMarker } from "../elements/point-marker-element";
import { RealTimeLocationMarker } from "../elements/real-time-location-marker-element";
import { StartLocationMarker } from "../elements/start-location-marker-element";

 

export interface IMarkerVisitor {
  visitPointMarker(markerData: PointMarker);
  visitStartLocation(markerData: StartLocationMarker);
  visitRealTimeLocation(markerData: RealTimeLocationMarker);
}
