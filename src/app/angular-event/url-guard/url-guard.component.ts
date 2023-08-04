import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-url-guard',
  templateUrl: './url-guard.component.html',
  styleUrls: ['./url-guard.component.scss']
})
export class UrlGuardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
/*
private window: Window;
    private scrollX = 0;
    private scrollY = 0;
    private previousUrl: string = null;

    constructor(
        private router: Router,
        private windowRef: WindowRef,
        @Inject('preserveScrollPosition') private preserveScrollPosition: boolean
    ) {
        this.window = this.windowRef.nativeWindow
        this.disableBackButton();
        this.addPopStateEventListener();
    }

    static forRoot(config?: { preserveScrollPosition: boolean }): ModuleWithProviders<UrlGuardModule> {
        return {
            ngModule: UrlGuardModule,
            providers: [
                {
                    provide: 'preserveScrollPosition',
                    useValue: config && 'preserveScrollPosition' in config ? config.preserveScrollPosition : false
                }
            ]
        }
    }

    private addPopStateEventListener(): void {
        this.window.addEventListener('popstate', () => {
            if (this.preserveScrollPosition) this.getScrollCoordinates();
            this.window.history.pushState(null, null, null);
            if (this.preserveScrollPosition) setTimeout(this.scrollToThePreviousPosition.bind(this));
        });
    }

    private scrollToThePreviousPosition(): void {
        this.window.scrollTo(this.scrollX, this.scrollY);
    }

    private getScrollCoordinates(): void {
        this.scrollX = this.window.scrollX;
        this.scrollY = this.window.scrollY;
    }

    private disableBackButton(): void {
        this.window.history.pushState(null, null, null);
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                //disableBackButton
                this.window.history.pushState(null, null, null);
                this.previousUrl = event.url;
            };
            if (event instanceof NavigationStart) {
                this.guardUrl(event);
            }
        });
    }

    private guardUrl(event: NavigationStart): void {
        const currentUrl: string = event.url;
        if (currentUrl) {
            if (currentUrl.indexOf(GlobalConstants.SHIPMENT_URL) != -1
                || currentUrl.indexOf(GlobalConstants.PAYMENT_URL) != -1
                || currentUrl.indexOf(GlobalConstants.CONFIRMATION_URL) != -1) {
                if (this.previousUrl != '/' + GlobalConstants.CART_URL) {

                } 
            }
        }

    }
*/
}
