export interface IMapMarker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
    event_info?:string;
  }