
'''Usage

import { AutoUnsubscribe } from "ngx-auto-unsubscribe";

@AutoUnsubscribe()
@Component({
  selector: 'inbox'
})
export class InboxComponent {
  one: Subscription;
  two: Subscription;

  constructor( private store: Store<any>, private element : ElementRef ) {}

  ngOnInit() {
    this.one = store.select("data").subscribe(data => // do something);
    this.two = Observable.interval.subscribe(data => // do something);
  }

  // This method must be present, even if empty.
  ngOnDestroy() {
    // We'll throw an error if it doesn't
  }
}

```Options

Option	    Description	                                                Default Value
arrayName	unsubscribe from subscriptions only in specified array      ''
blackList	an array of properties to exclude	                        []
event	a name of event callback to execute on	                        ngOnDestroy

Note: blackList is ignored if arrayName is specified.