import { OverlayRef, Overlay, ConnectionPositionPair } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Directive, Host, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InfoButtonComponent } from './info-button/info-button.component';

@Directive({
  selector: '[appInfoPopup]'
})
export class InfoPopupDirective implements OnInit, OnDestroy, AfterViewInit {
  @Input() appInfoPopup!: TemplateRef<object>;
  @Input() label!: HTMLElement;
  private unsubscribe = new Subject();
  private overlayRef!: OverlayRef;

  constructor(
    @Host() private infoButton: InfoButtonComponent,
    private overlay: Overlay,
    private vcr: ViewContainerRef,
  ) { }

  ngOnInit(): void {
    this.createOverlay();
  }

  ngAfterViewInit(): void {
    this.infoButton.infoButtonClicked.asObservable().subscribe(() => {
      this.attachOverlay();
    });
  }

  ngOnDestroy(): void {
    this.detachOverlay();
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private createOverlay(): void {
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.label)
      .withPositions([
        new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
        new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
      ])
      .withPush(false);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy,
      hasBackdrop: true,
    });

    this.overlayRef
      .backdropClick()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.detachOverlay();
      });
  }

  private attachOverlay(): void {
    if (!this.overlayRef.hasAttached()) {
      const periodSelectorPortal = new TemplatePortal(this.appInfoPopup, this.vcr);

      this.overlayRef.attach(periodSelectorPortal);
    }
  }

  private detachOverlay(): void {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }
}