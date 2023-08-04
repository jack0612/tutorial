import { IMarkerVisitor } from "../visitors/marker-visitor.interface";

export abstract class CustomMarker<T> {
  data: T;
  abstract id: string;
  abstract type: CustomMarkerType;
  abstract position;
  abstract icon;
  abstract title: string;

  constructor(data: T) {
    this.data = data;
  }
  
  /**
   * The CustomMarker declares an `accept` method that should take the base
   * visitor interface as an argument.
   */
  abstract accept(visitor: IMarkerVisitor): void;
}

export enum CustomMarkerType {
  POINT = "POINT",
  START_LOCATION = "START_LOCATION",
  REAL_TIME_LOCATION = "REAL_TIME_LOCATION",
}