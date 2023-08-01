import {
    Directive,
    Input,
    OnDestroy,
    OnInit,
    TemplateRef,
    ViewContainerRef
} from "@angular/core";
import { NextObserver, Observable, Subscription } from "rxjs";
import { distinctUntilChanged, tap } from "rxjs/operators";

type LetViewContext<T> = {
    $implicit: T | undefined;
    $error: Error | undefined;
    $complete: boolean;
};

type TemplateRecord<T> = {
    next: TemplateRef<LetViewContext<T>> | undefined;
    complete: TemplateRef<LetViewContext<T>> | undefined;
    error: TemplateRef<LetViewContext<T>> | undefined;
    suspense: TemplateRef<LetViewContext<T>> | undefined;
};

@Directive({
    selector: "[rxLet]"
})
export class LetDirective<T> implements OnInit, OnDestroy {
    @Input()
    set rxLet(sourceObservable: Observable<T>) {
        this.subscription.unsubscribe();
        const observable = sourceObservable.pipe(
            distinctUntilChanged(),
            tap(this.updateObserver)
        );
        this.subscription = new Subscription().add(observable.subscribe());
    }

    @Input()
    set rxLetComplete(templateRef: TemplateRef<LetViewContext<T>>) {
        // store the template
        this.templateCache.complete = templateRef;
    }

    @Input()
    set rxLetError(templateRef: TemplateRef<LetViewContext<T>>) {
        // store the template
        this.templateCache.error = templateRef;
    }

    @Input()
    set rxLetSuspense(templateRef: TemplateRef<LetViewContext<T>>) {
        // store the template
        this.templateCache.suspense = templateRef;
    }

    private subscription = new Subscription();
    private templateCache: TemplateRecord<T> = {} as TemplateRecord<T>;
    private viewContext: LetViewContext<T> = {
        $implicit: undefined,
        $error: undefined,
        $complete: false
    };
    private activeView: keyof TemplateRecord<T>;
    private updateObserver: NextObserver<T> = {
        next: value => {
            /*
            // display view
            this.displayView("next");
            // update view context
            this.updateViewContext({
                $implicit: value
            });
            */
        },
        error: err => {
            // display view
            if (this.templateCache.error) {
                this.displayView("error");
            } else {
                this.displayView("next");
            }
            // update view context
            this.updateViewContext({
                $error: err
            });
        },
        complete: () => {
            // display view
            if (this.templateCache.complete) {
                this.displayView("complete");
            } else {
                this.displayView("next");
            }
            // update view context
            this.updateViewContext({
                $complete: true
            });
        }
    };

    constructor(
        nextTemplate: TemplateRef<LetViewContext<T>>,
        private viewContainerRef: ViewContainerRef
    ) {
        this.templateCache.next = nextTemplate;
    }

    ngOnInit() {
        if (this.templateCache.suspense) {
            this.displayView("suspense");
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.viewContainerRef.clear();
    }

    private displayView(name: keyof TemplateRecord<T>) {
        if (this.activeView !== name && !!this.templateCache[name]) {
            this.viewContainerRef.detach();
            this.viewContainerRef.createEmbeddedView(
                this.templateCache[name],
                this.viewContext
            );
            this.activeView = name;
        }
    }

    private updateViewContext(viewContextSlice: Partial<LetViewContext<T>>) {
        Object.entries(viewContextSlice).forEach(([key, value]) => {
            this.viewContext[key] = value;
        });
    }
}
