import { CustomMarker, CustomMarkerType } from "./marker-element.interface";

import { IMarkerVisitor } from "../visitors/marker-visitor.interface";
import { MapIcon } from "../map-icon";
import { RealtimeLocationModel } from "../model/realtime-location";
declare var google: any;
export class RealTimeLocationMarker extends CustomMarker<
  RealtimeLocationModel
> {
  id: string;
  type: CustomMarkerType;
  position;
  popupContent: string;
  icon;
  title: string;

  constructor(realTimeLocation: RealtimeLocationModel) {
    super(realTimeLocation);
    let { latitude, longitude } = realTimeLocation.geoCoordinate;
    this.id = `${new Date().getTime()}`;
    this.type = CustomMarkerType.REAL_TIME_LOCATION;
    this.position = new google.maps.LatLng(latitude, longitude);
    this.title = `Real time location`;
    this.popupContent = `
        <div>Real time location</div>
        <div>${new Date(realTimeLocation.capturedTimeStamp).toString()}</div>
        <div>(${latitude}, ${longitude})</div>
    `;
    this.icon = {
      url: MapIcon.REAL_TIME_ICON,
      anchor: new google.maps.Point(8, 8), // anchor (move to center of marker),
      scaledSize: new google.maps.Size(17, 17), // scaled size (required for Retina display icon)
    };
  }

  accept(visitor: IMarkerVisitor): void {
    visitor.visitRealTimeLocation(this);
  }

  /**
   * Concrete Components may have special methods that don't exist in their
   * base class or interface. The Visitor is still able to use these methods
   * since it's aware of the component's concrete class.
   */
  concreteMethodOfRealTimeLocation() {
    return "Real time";
  }
}
