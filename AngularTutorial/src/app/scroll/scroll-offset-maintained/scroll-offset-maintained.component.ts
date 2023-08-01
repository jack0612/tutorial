
// Import the core angular services.
import { ChangeDetectorRef } from "@angular/core";
import { Component } from "@angular/core";
import { ElementRef } from "@angular/core";
import { ViewChild } from "@angular/core";
//https://www.bennadel.com/blog/3724-maintaining-scroll-offsets-when-adding-content-above-the-users-viewport-in-angular-9-0-0-rc-2.htm
//https://www.bennadel.com/blog/3460-automatically-scroll-the-window-when-the-user-approaches-the-viewport-edge-in-javascript.htm
// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

interface NewsItem {
	hook: string;
	content: string;
}

@Component({
  selector: 'app-scroll-offset-maintained',
  templateUrl: './scroll-offset-maintained.component.html',
  styleUrls: ['./scroll-offset-maintained.component.scss']

})
export class ScrollOffsetMaintainedComponent {

	public demoType: "window" | "container";
	public newsItems: any[];

	@ViewChild( "viewportRef" )
	public viewportRef!: ElementRef;

	private changeDetectionRef: ChangeDetectorRef;

	// I initialize the app component.
	constructor( changeDetectionRef: ChangeDetectorRef ) {

		this.changeDetectionRef = changeDetectionRef;
		this.demoType = "container";
		this.newsItems = [];	

	}

	// ---
	// PUBLIC METHODS.
	// ---

	// I get called once, after all of the component inputs have been bound.
	public ngOnInit() : void {
/*
		window.setInterval(
			() => {

				this.addNewsItem();

			},
			500
		);	
*/
  }
  
  public  addNewsItem(){
    this._addNewsItem();
  }


	// I determine which container will be used to constrain the demo.
	public use( newDemoType: "window" | "container" ) : void {

		this.demoType = newDemoType;
		// Reset the news feed when the demo type changes.
		this.newsItems = [];

	}

	// ---
	// PRIVATE METHODS.
	// ---

	// I add a new news item, using the abstracted DOM manipulation methods.
	private _addNewsItem() : void {

		// NOTE: Depending on the type of demo, the constrained container is different.
		// And, the different containers use slightly different DOM methods for getting
		// and setting the current scroll heights and offsets. As such, the getters and
		// setters have been abstracted into other private methods. That said, the
		// algorithm is the same in both cases:
		// --
		// STEP 1: Get current scroll conditions.
		// STEP 2: Add new content and force DOM reconciliation.
		// STEP 3: Check new scroll conditions.
		// STEP 4: Update scroll settings to account for new content.
		// --

    // STEP ONE: Get the current scroll conditions for the container.
    //The scrollHeight value is the entire height  of an element, including padding.
    //The offset() method set or returns the offset coordinates for the selected elements, relative to the document.
		var preScrollHeight = this.getContainerScrollHeight();
    var preScrollTop = this.getContainerScrollTop();
    

    // STEP TWO: Add the content that will change the scroll-height of the container.
    //unshift():Add new items to the beginning of an array:
		this.newsItems.unshift({
			hook: JSON.stringify({preScrollHeight,preScrollTop}),
			content: "Something something something something..."
		});

		// Force Angular to reconcile the DOM with the View Model. This call tells
		// Angular to trigger a change-detection so that our new news item will be
		// rendered to the browser, allowing us to inspect the scroll changes.
		this.changeDetectionRef.detectChanges();

		// STEP THREE: Now that Angular has rendered the changes in the browser, we have
		// to examine the state of the browser to see how the changes were handled.
		var postScrollTop = this.getContainerScrollTop();
    console.log({preScrollHeight,preScrollOffset: preScrollTop,postScrollOffset: postScrollTop})
    //{preScrollHeight: 306, preScrollOffset: 0, postScrollOffset: 0}
		// In modern Chrome and Firefox, the scroll-offset will be HANDLED AUTOMATICALLY.
		// Meaning, Chrome and Firefox will UPDATE THE SCROLL OFFSET in order to maintain
		// the "current" experience for the user (how great is that?!?!). However, Safari
		// does not do this. As such, if the pre/post scroll offsets are the same, we
		// have to step-in and manually SCROLL THE USER DOWN to compensate for the change
		// in document height.
		if (
			preScrollTop &&
			postScrollTop &&
			( preScrollTop === postScrollTop ) // The browser did NOT help us.
			) {

			// STEP FOUR: The browser didn't adjust the scroll offset automatically. As
      // such, we have to step in and scroll the user down imperatively.
      //The scrollHeight value is equal to the minimum height the element would require in order to fit
      // all the content in the viewport without using a vertical scrollbar. 
			var postScrollHeight = this.getContainerScrollHeight();
      var deltaHeight = ( postScrollHeight - preScrollHeight );
      console.log({postScrollHeight,deltaHeight})

			this.setScrollTop( postScrollTop, deltaHeight );

			console.warn( "Scrolling by", deltaHeight, "px" );

		}

	}


	// I get the current scroll height of the container.
	private getContainerScrollHeight() : number {
    var elmnt = document.getElementById("viewport");
    var y = elmnt.scrollHeight;
    var scrollHeight=this.viewportRef.nativeElement.scrollHeight;//note: y's value is equal scrollHeight's value
    console.log({y,scrollHeight})

		if ( this.demoType === "container" ) {

			return( this.viewportRef.nativeElement.scrollHeight );

		}

		// For the window, the scroll height is a bit more complicated. In order to get
		// cross-browser compatibility, we need to check a few different elements.
		// --
		// NOTE: I am not entirely sure how necessary this is. I am getting this
		// information from: https://javascript.info/size-and-scroll-window . It's
		// possible that this is only needed for older browser; and, that modern browsers
		// have more consistent support???
		return(
			Math.max(
				document.body.scrollHeight,
				document.body.offsetHeight,
				document.body.clientHeight,
				document.documentElement.scrollHeight,
				document.documentElement.offsetHeight,
				document.documentElement.clientHeight
			)
		);

	}


	// I get the current scroll offset of the container.
	private getContainerScrollTop() : number {

		if ( this.demoType === "container" ) {

			return( this.viewportRef.nativeElement.scrollTop );

		}

		return( window.pageYOffset );

	}


	// I get a random hook for a news item.
	private getRandomHook() : string {

		var hooks = [
			"Breaking News!",
			"Extra Extra!",
			"New Study Turns Industry On Its Head!",
			"You Won't Believe This!",
			"News At 11!",
			"Scandalous Behavior!",
			"Florida Man likes to garden in the nude!"
		];

		var index = Math.floor( Math.random() * hooks.length );

		return( hooks[ index ] );

	}


	// I update the container to use the new scroll offset.
	private setScrollTop(
		currentScrollTop: number,
		delta: number
		) : void {

		if ( this.demoType === "container" ) {

			this.viewportRef.nativeElement.scrollTop = ( currentScrollTop + delta );

		}

		window.scrollBy( 0, delta );

	}

}
