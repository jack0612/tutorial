import { StartLocationModel } from "../model/start-location";
import { CustomMarker, CustomMarkerType } from "./marker-element.interface";
import { IMarkerVisitor } from "../visitors/marker-visitor.interface";
import { MapIcon } from "../map-icon";
declare var google: any;
export class StartLocationMarker extends CustomMarker<StartLocationModel> {
  id: string;
  type: CustomMarkerType;
  position;
  popupContent: string;
  icon;
  title: string;

  constructor(startLocation: StartLocationModel) {
    super(startLocation);

    let {
      street,
      postalCode,
      geoCoordinate: { latitude, longitude },
    } = startLocation.location;

    this.type = CustomMarkerType.START_LOCATION;
    this.title = "Start location";
    console.log('1google',google)
    this.position = new google.maps.LatLng(latitude, longitude);
    this.icon = {
      url: MapIcon.START_LOCATION_ICON,
    };
    this.popupContent = `
        <div>Start location</div>
        <div>${street}, ${postalCode}</div>
    `;
  }
  accept(visitor: IMarkerVisitor) {
    visitor.visitStartLocation(this);
  }
}
