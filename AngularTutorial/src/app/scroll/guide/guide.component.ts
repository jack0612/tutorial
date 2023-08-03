import { DatePipe, KeyValuePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatExpansionPanelHeader } from '@angular/material/expansion';
import { GuideConstants } from './guide.constants'

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss'],
  providers: [KeyValuePipe],

})
export class GuideComponent implements OnInit, AfterViewInit {
  @ViewChild('guideContainer', { static: true }) _guideContainer: ElementRef;
  panelOpenState: boolean;
  recipientAddressIsDomestic: boolean = true;
  isUserConsumer: boolean = false;
  isMidMarketUser: boolean = false;
  displayGuideForMobile: boolean = false;
  previousActiveElement;
  favoriteSeason;
  public keyValuePipe;

  constructor(private _renderer: Renderer2,
    private _changeDetectionRef: ChangeDetectorRef,
    keyValuePipe: KeyValuePipe) {
    this.keyValuePipe = keyValuePipe;


    this.isUserConsumer = false;

    this.isMidMarketUser = true;
    this._convert();

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let childSection = GuideConstants.SHIPMENT.FROM.SENDER_ADDRESS
    let childElement = document.getElementsByClassName(childSection);


  }


  hideGuide(): void {
    this.displayGuideForMobile = false;
    this.previousActiveElement.focus();
  }

  trapFocus(): void {
    document.getElementsByTagName('div')[0].focus();
  }

  /*
  * This method expand associated section in the guide. First it expand the guide itself,
  * then expand section and associated content section
  * @param parentSection guide section
  * @param childSection guide sub section (description details section)
  */



  private _childSection;


  private _tops = null;
  private _childElements: HTMLCollectionOf<Element>[] = [];
  private _eventClicked = false;

  public expandGuide(parentSection: string, childSection: string) {
    let guideElement = document.getElementsByClassName('ship-ui-guide-header');
    let childElement = document.getElementsByClassName(childSection);
    let parentElement = document.getElementsByClassName(parentSection);
    if (this._tops == null) {
      this._setTops();
    }
    // Todo need to refactor method to not use manual events
    let event;
    if (typeof (Event) === 'function') {
      event = new Event('click');
    } else {
      event = document.createEvent('Event');
      event.initEvent('click', true, true);
    }

    if (guideElement && parentElement && childElement) {

      // don't dispatch an even when the panel or section already expanded (avoid toggling)
      if (!guideElement[0].classList.contains('mat-expanded')) {
        this.previousActiveElement = document.activeElement;
        guideElement[0].dispatchEvent(event);
        this.displayGuideForMobile = true;
        this.trapFocus();
      }

      if (!parentElement[0].classList.contains('mat-expanded')) {
        parentElement[0].dispatchEvent(event);
        this.displayGuideForMobile = true;
      }


      //collapse the already expanded elements except this childSection element if it has been expanded 
      if (this._childElements.length > 0) {
        for (let childEle of this._childElements) {
          console.log('2222childEle', childEle[0].classList.contains('mat-expanded'), childEle[0].classList.contains(childSection))
          if (childEle[0] && childEle[0].classList.contains('mat-expanded') && !childEle[0].classList.contains(childSection)) {
            console.log('+++colapse ', this._getClassName(childEle[0].classList))
            childEle[0].dispatchEvent(event);
          }
        }
        this._emptyChildElements();
      }

      if (!childElement[0].classList.contains('mat-expanded')) {
        childElement[0].dispatchEvent(event);
        this.displayGuideForMobile = true;
        console.log('000000set _eventClicked', this._eventClicked, childSection)
      } /*else {
        console.log('11111', childElement[0].classList)
        this._eventClicked = true;
        this.scrollIntoView(childSection)
      }*/

      this._childElements.push(childElement);
      this._eventClicked = true;

    }
  }

  private _getClassName(classList) {
    let result = [];
    for (let name of classList) {
      if (name.includes('guide-')) {
        result.push(name)
      }
    }
    return result;
  }

  private _emptyChildElements(): void {
    while (this._childElements.length > 0) {
      this._childElements.pop();
    }
  }

  private _display(childSection) {
    let childElement = document.getElementsByClassName(childSection);
    let top = null;
    console.log('_display', childSection, childElement)
    if (childElement && childElement[0]) {
      top = childElement[0].getBoundingClientRect().top;
      console.log(childSection + ' current top:', Math.round(top) + ' @' + (new Date().getMilliseconds()) % 10000 
      + ' times:', this._times,this._oneMoreTimes)
    }
    return top;
  }
  //the panel could be expaned programtically or manually,
  //(afterExpaned) event always is emitted no matter the panel is expanded mannulay or programtically
  _times = 0;
  scrollIntoView(childSection: string): void {
    let container = document.getElementsByClassName('ship-ui-guide-contents');
    let newTop = this._tops[childSection] - this._tops['ship-ui-guide-contents'];
    console.log('@@@@' + this._eventClicked + ',' + childSection + ' scrollIntoView._scrollTo', newTop)
    if (this._eventClicked) {
      this._eventClicked = false;
      this._times = 0;
      this._oneMoreTimes = 0;
      this._display(childSection)
      this._scrollTo(container, childSection, newTop)
    } else if (childSection) {
      let childElement = document.getElementsByClassName(childSection);
      if (this._childElements.indexOf(childElement) == -1) {
        this._childElements.push(childElement);
        console.log('length', this._childElements.length)
      }
    }
  }

  private _oneMoreTimes = 0;
  private _scrollTo(container, childSection, newTop) {
    setTimeout(
      () => {
        this._times++;
        container[0].scrollTo({ top: newTop })
        let curTop = this._display(childSection);
        if (curTop) {
          let dis = Math.abs(curTop - newTop);
          console.log({ curTop, newTop, dis })
          if (dis > 40) {
            this._scrollTo(container, childSection, newTop)
          } else if (this._oneMoreTimes <= 1) {
            this._oneMoreTimes++;
            this._scrollTo(container, childSection, newTop)
          }
        }
      }, 100);
  }

  opened() {
    console.log('-------opened')
  }


  _isInViewport(childSection) {
    let container = document.getElementsByClassName('ship-ui-guide-contents');
    let containerBcr = container[0].getBoundingClientRect();
    let childElement = document.getElementsByClassName(childSection);

    let childBcr = childElement[0].getBoundingClientRect();

    let is = childBcr.top > containerBcr.top &&
      childBcr.bottom < containerBcr.bottom;

    console.log('')


  };


  _getContainerTop() {
    return document.getElementsByClassName('ship-ui-guide-contents')[0].getBoundingClientRect().top;
  }




  //https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
  scroll() {
    //this.expandGuide(GuideConstants.SHIPMENT.PACKAGE.PACKAGE, GuideConstants.SHIPMENT.PACKAGE.PREPAID_ENVELOPE);
    //this.expandGuide(GuideConstants.SHIPMENT.FROM.FROM, GuideConstants.SHIPMENT.FROM.SENDER_ADDRESS);

    let childSection = this._childSection;
    let newTop = this._tops[childSection] - this._tops['ship-ui-guide-contents'];
    let container = document.getElementsByClassName('ship-ui-guide-contents');
    let containerTop = this._getContainerTop();
    console.log({ newTop, childSectionTop: this._tops[childSection], previousContainerTop: this._tops['ship-ui-guide-contents'], containerTop })
    //this._guideContainer.nativeElement.scrollTop=newTop;
    container[0].scrollTo({ top: newTop });



  }



  get constants() {
    return GuideConstants.SHIPMENT
  }
  panels = {};
  items = []
  panelKeys;
  private _convert() {
    this.panels = (this.constants)
    this.panelKeys = Object.keys(this.constants);

    for (let key in this.panels) {
      let panel = this.panels[key];
      let panelItems = this.keyValuePipe.transform(panel)
      this.items[key] = panelItems
    }
    //console.log('----items', this.items)
  }

  checkTops() {
    this._setTops();
  }
  private _setTops() {
    this._tops = {};
    this.panels = (this.constants)
    this.panelKeys = Object.keys(this.constants);
    let container = document.getElementsByClassName('ship-ui-guide-contents');
    this._tops['ship-ui-guide-contents'] = Math.round(container[0].getBoundingClientRect().top);
    for (let panelKey in this.panels) {
      let panel = this.panels[panelKey];
      if (panel && typeof panel === 'object') {
        for (let itemKey in panel) {
          let childSection = panel[itemKey];
          //console.log({itemKey,childSection})
          let childElement = document.getElementsByClassName(childSection);
          if (childElement && childElement[0]) {
            let top = childElement[0].getBoundingClientRect().top;
            top = Math.round(top);
            this._tops[childSection] = top;

          }

        }
      }
    }
    //console.log('tops', this._tops)
  }

  clickRadio(panelKey, itemKey) {
    //console.log({ panelKey, itemKey })
    let panel = this.constants[panelKey][panelKey];
    let item = this.constants[panelKey][itemKey];
    //console.log({ panel, item })
    this.expandGuide(panel, item);
  }


}

