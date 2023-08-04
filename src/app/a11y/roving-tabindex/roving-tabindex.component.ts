import { FocusableOption, FocusKeyManager } from '@angular/cdk/a11y';
import { HostListener } from '@angular/core';
import { AfterContentInit, Component, ContentChildren, ElementRef, Input, QueryList } from '@angular/core';
//https://medium.com/angular-in-depth/doing-a11y-easily-with-angular-cdk-keyboard-navigable-lists-d32f458b8851
//https://netbasal.com/accessibility-made-easy-with-angular-cdk-1caaf3d98de2
@Component({
  selector: 'app-list-item',
  styles: [`
    :host {
      display: block;
      margin: 1rem 0;
      padding: 1rem;
      background-color: #0090FF;
      transition: all 0.3s;
      outline: none;
      color: white;
    }

    :host(:focus) {
      background-color: #28BF5F;
      transform: translateX(1rem);
    }
  `],
  host: { tabindex: '-1' },
  template: `
    <span>{{ fruit }}</span>
  `,
})
export class ListItemComponent implements FocusableOption {
  @Input() fruit: string;
  disabled: boolean;

  constructor(private element: ElementRef) {
  }

  getLabel(): string {
    return this.fruit;
  }

  focus() {
    this.element.nativeElement.focus();
  }
}

@Component({
  selector: 'app-list',
  styles: [`
    :host {
      display: block;
      max-width: 30rem;
    }
  `],
  template: `
    <ng-content></ng-content>
  `,
  host: { 'tabindex': '0' },
})
export class ListComponent implements AfterContentInit {
  // 1. Query all child elements
  @ContentChildren(ListItemComponent) items: QueryList<ListItemComponent>;
  // FocusKeyManager instance
  private keyManager: FocusKeyManager<ListItemComponent>;
  ngAfterContentInit() {
    // 2. Instantiate FocusKeyManager
    this.keyManager = new FocusKeyManager(this.items)
      // 3. Enabling wrapping
      .withWrap();
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event) {
    this.keyManager.onKeydown(event);
  }
}


@Component({
  selector: 'app-roving-index',
  styles: [`
    :host {
      display: block;
      padding: 1rem;
    }
  `],
  template: `
    <h1>Fruits</h1>
    
    <app-list>
      <app-list-item *ngFor="let fruit of fruits" [fruit]="fruit"></app-list-item>
    </app-list>
  `,
})
export class RovingTabIndexComponent  {
  fruits = [
    'Apples',
    'Bananas',
    'Cherries',
    'Dewberries',
    'Blueberries',
    'Avocados',
  ];
}

