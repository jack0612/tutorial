import { CustomMarker, CustomMarkerType } from "./marker-element.interface";
import { PointModel } from "../model/point";
import { IMarkerVisitor } from "../visitors/marker-visitor.interface";
import { MapIcon } from '../map-icon';
declare var google: any;
export class PointMarker extends CustomMarker<PointModel> {
  id: string;
  type: CustomMarkerType;
  position;
  popupContent: string;
  data: PointModel;
  icon;
  title: string;

  constructor(point: PointModel) {
    super(point);

    let {
      street,
      postalCode,
      geoCoordinate: { latitude, longitude },
    } = point.location;
    
    this.id = point.id;
    this.type = CustomMarkerType.POINT;
    this.position = new google.maps.LatLng(latitude, longitude);
    this.icon = {
      url: MapIcon.POINT_ICON,
      scaledSize: new google.maps.Size(18, 18)      
    }
    this.title = `Point ${point.sequence + 1}`;
    this.popupContent = `
        <div><strong>Point ${point.sequence + 1}</strong></div>
        <div>${street}, ${postalCode}</div>
    `;
  }

  accept(visitor: IMarkerVisitor) {
    visitor.visitPointMarker(this);
  }
}
