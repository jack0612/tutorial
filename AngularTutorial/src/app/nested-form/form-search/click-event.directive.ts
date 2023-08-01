import { Directive, Input, HostListener } from "@angular/core";
import { Subject } from "rxjs";

@Directive({
  selector: "[clickEvent]"
})
export class ClickEventDirective {
  @Input() clickEvent: Subject<void>;

  @HostListener("click") onClick() {
    this.clickEvent.next();
  }
}