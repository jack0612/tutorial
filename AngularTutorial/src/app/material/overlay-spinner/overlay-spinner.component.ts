import { OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { OverlayService } from '@shared/services/overlay.service';
import { AppUtil } from '@shared/utils/app-util';
import { tap, timer } from 'rxjs';

@Component({
  selector: 'app-overlay-spinner',
  templateUrl: './overlay-spinner.component.html',
  styleUrls: ['./overlay-spinner.component.scss']
})
export class OverlaySpinnerComponent implements OnInit {

  @Input() color?: ThemePalette = 'primary';
  @Input() diameter?: number = 100;
  @Input() mode?: ProgressSpinnerMode = 'indeterminate';
  @Input() strokeWidth?: number = 8;
  @Input() value?: number = 50;
  @Input() backdropEnabled?= false;
  @Input() positionGloballyCenter?= true;
  @Input() deplayMs?: number = 500;
  @Input() displaySpinner: boolean;

  @ViewChild('spinnerRef') private spinnerRef: TemplateRef<any>;

  private spinnerOverlayConfig: OverlayConfig;
  private overlayRef: OverlayRef;
  private shouldLaunchSpinner: boolean = false;

  constructor(
    private vcRef: ViewContainerRef,
    private overlayService: OverlayService
  ) { }


  ngOnInit() {
    this.spinnerOverlayConfig = {
      hasBackdrop: this.backdropEnabled
    };
    if (this.positionGloballyCenter) {
      this.spinnerOverlayConfig['positionStrategy'] = this.overlayService.positionGloballyCenter();
    }
    this.overlayRef = this.overlayService.createOverlay(this.spinnerOverlayConfig);
    if (this.shouldLaunchSpinner) {
      this.shouldLaunchSpinner = false;
      this.launchSpinner();
    }
  }

  ngOnChanges() {
    if (this.displaySpinner) {
      this.launchSpinnerAfterDeplay();
    } else if (!this.displaySpinner && this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }

  private launchSpinnerAfterDeplay() {
    const obs = timer(this.deplayMs)
      .pipe(tap(() => {
        if (this.displaySpinner) {
          if (this.overlayRef) {
            this.launchSpinner();
          } else {
            this.shouldLaunchSpinner = true;
          }
        }
      }));
    AppUtil.runObservableOnlyOneTime(obs);
  }

  private launchSpinner() {
    if (!this.overlayRef.hasAttached()) {
      this.overlayService.attachTemplatePortal(this.overlayRef, this.spinnerRef, this.vcRef);
    }
  }
}
