import { IMarkerVisitor } from "./marker-visitor.interface";
import { PointMarker } from "../elements/point-marker-element";
import { StartLocationMarker } from "../elements/start-location-marker-element";
import { RealTimeLocationMarker } from "../elements/real-time-location-marker-element";
import { CustomMarker } from "../elements/marker-element.interface";
import { RouteApiService } from "../route-api.service";

export class MarkerVisitorMouseOver implements IMarkerVisitor {
  constructor(private _api: RouteApiService) {}

  visitPointMarker(marker: PointMarker) {
    this.logMessage(marker);
  }

  visitStartLocation(marker: StartLocationMarker) {
    this.logMessage(marker);
  }

  visitRealTimeLocation(marker: RealTimeLocationMarker) {
    this.logMessage(marker);
  }

  logMessage(marker: CustomMarker<any>) {
    this._api.sendMessage(`${marker.title} mouse over`);
  }
}
