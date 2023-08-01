import { Component, OnInit } from "@angular/core";
import { RouteApiService } from "./model/visitor-pattern/route-api.service";
import { RouteModel } from "./model/visitor-pattern/model/route";
/*
Elements:
PointMarker
RealTimeLocationMarker
StartLocationMarker

Operations:
MarkerMouseClickVisitor
MarkerMouseOutVisitor
MarkerMouseOverVisitor
*/
@Component({
  selector: "visitor-marker",
  templateUrl: "./visitor-marker.component.html",
  styleUrls: ["visitor-marker.component.css"]
})
export class VisitorMarkerComponent implements OnInit {
  messeges: string[] = [];
  route: RouteModel;
  constructor(private routeApiService: RouteApiService) {}

  ngOnInit() {
    this.loadRoute();
    this.onLogMessage();
  }

  loadRoute() {
    this.routeApiService.getRoute().subscribe(route => {
      this.route = route;
      console.log('route',route.points)
    });
  }

  onLogMessage() {
    this.routeApiService.messageUpdate$.subscribe(message => {
      this.messeges = [message, ...this.messeges];
    });
  }

  clearLog() {
    this.messeges = [];
  }
}
