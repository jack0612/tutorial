import {
	Input,
	Component,
	Output,
	EventEmitter,
	HostListener,
	ElementRef,
	Renderer2,
	ViewChild,
	AfterContentInit,
} from '@angular/core';
import { TabComponent } from './tab.component';
 
import $ from "jquery";

enum Direction {
	LEFT = 1,
	RIGHT,
	TOP,
	BOTTOM
}
enum Action {
	SHOW = 1,
	HIDE
}
const _TAB_CAROUSEL_SHIFT_PORTION = 0.67;
const _TAB_CAROUSEL_LEFT_TOLERANCE_PX = 1;
const _TAB_CAROUSEL_RIGHT_TOLERANCE_PX = 22;
@Component({
	selector: 'msx-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tab.component.scss']
})
 
export class TabsComponent implements AfterContentInit {
	isVertical: boolean = false;
	isHorizontal: boolean = true;
	private _tabs: TabComponent[] = [];
	private _clicked: boolean = false;
	private _selected: string | null = null;
	private _clickEnabled = true;

	@Input()
	set direction(direction: string) {
		this._setDirection(direction);
		this._resetPosition();
		this._readjust();
		setTimeout(() => this._readjust(), 10);
	}

	@Input()
	set selected(selected: any) {
		if (selected) {
			if (!this._clicked || this._tabs.length === 0) {
				this._selected = selected;
			}
			this._tabs.forEach((tab) => {
				tab.isSelected = false;
				if (tab.value === selected) {
					this._setTabSelected(tab, false);
				}
			});
		}
	}

	@Output() selectedChange: EventEmitter<any> = new EventEmitter();

	@ViewChild('leftCarousel', { static: false }) _leftCarousel!: ElementRef;
	@ViewChild('rightCarousel', { static: false }) _rightCarousel!: ElementRef;

	constructor(private renderer: Renderer2) { }

	ngAfterContentInit(): void {
		this._readjust();
	}

	ngDoCheck(): void {
		this._readjust();
	}

	@HostListener('window:resize') onResize(): void {
		this._readjust();
	}

	shiftLeft(): void {
		if (!this._clickEnabled) {
			return;
		}
		this._clickEnabled = false;
		const leftPosition = this._getLeftPosition();
		const wrapperWidth = this._getWrapperWidth();
		let min = wrapperWidth;
		if (min > Math.abs(leftPosition)) {
			min = Math.abs(leftPosition);
			this._showOrHide(Direction.LEFT, Action.HIDE);
		} else {
			min = min * _TAB_CAROUSEL_SHIFT_PORTION;
		}
		this._animateHorizontally(min);
	}

	shiftRight(): void {
		if (!this._clickEnabled) {
			return;
		}
		this._clickEnabled = false;
		const leftPosition = this._getLeftPosition();	// minus value
		const wrapperWidth = this._getWrapperWidth();
		const itemsWidth = this._getItemsWidth();
		let min = wrapperWidth;
		if (min > itemsWidth + leftPosition - wrapperWidth + _TAB_CAROUSEL_RIGHT_TOLERANCE_PX) {
			min = itemsWidth + leftPosition - wrapperWidth + _TAB_CAROUSEL_RIGHT_TOLERANCE_PX;
			this._showOrHide(Direction.RIGHT, Action.HIDE);
		} else {
			min = min * _TAB_CAROUSEL_SHIFT_PORTION;
		}
		this._animateHorizontally(-min);
	}

	register(tabComponent: TabComponent): void {
		if (this._tabs.length === 0) {
			this._setTabSelected(tabComponent, true);
		} else if (!this._clicked) {
			if (typeof this._selected !== 'undefined' && tabComponent.value === this._selected) {
				this._tabs.forEach((o: TabComponent) => {
					o.isSelected = false;
				});
				this._setTabSelected(tabComponent, false);
			}
		}
		this._tabs.push(tabComponent);
	}

	select(tabComponent: TabComponent): void {
		this._clicked = true;
		this._tabs.forEach((o: TabComponent) => {
			o.isSelected = false;
		});
		this._setTabSelected(tabComponent, false);
	}

	private _setDirection(direction?: string): void {
		const directionTmp = direction || 'horizontal';
		this.isVertical = directionTmp === 'vertical';
		this.isHorizontal = directionTmp === 'horizontal';
	}

	private _setTabSelected(tabComponent: TabComponent, byDefault: boolean): void {
		tabComponent.isSelected = true;
		if (!byDefault) {
			this._selected = tabComponent.value;
		}
		this.selectedChange.emit(this._selected);
	}

	private _readjust(): void {
		if (this.isHorizontal) {
			this._readjustHorizontally();
		}
	}

	private _readjustHorizontally(): void {
		const wrapperWidth = this._getWrapperWidth();
		const leftPosition = this._getLeftPosition();
		if (this._getItemsWidth() + leftPosition - wrapperWidth > _TAB_CAROUSEL_RIGHT_TOLERANCE_PX) {
			this._showOrHide(Direction.RIGHT, Action.SHOW);
		} else {
			this._showOrHide(Direction.RIGHT, Action.HIDE);
		}
		if (leftPosition < -_TAB_CAROUSEL_LEFT_TOLERANCE_PX) {
			this._showOrHide(Direction.LEFT, Action.SHOW);
		} else {
			this._showOrHide(Direction.LEFT, Action.HIDE);
		}
	}

	//* ngIf does not work for carousel icon which is displayed with ::before
	private _showOrHide(direction: Direction, action: Action): void {
		if (direction === Direction.LEFT && this._leftCarousel) {
			this.renderer.setStyle(this._leftCarousel.nativeElement, 'display', action === Action.SHOW ? 'inline' : 'none');
		}
		if (direction === Direction.RIGHT && this._rightCarousel) {
			this.renderer.setStyle(this._rightCarousel.nativeElement, 'display', action === Action.SHOW ? 'inline' : 'none');
		}
	}

	private _getWrapperWidth(): number {
		return $('.msx-tabs__overflow-wrapper').outerWidth() || 0;
	}

	private _getItemsWidth(): number {
		return $('.msx-tabs__list').outerWidth() || 0;
	}

	private _getLeftPosition(): number {
		return $('.msx-tabs__list').position().left;
	}

	private _animateHorizontally(pixels: number): void {
		$('.msx-tabs__list').animate({ left: "+=" + pixels + "px" }, 'slow', () => {
			this._clickEnabled = true;
		});
	}

	private _resetPosition(): void {
		$('.msx-tabs__list').css({ top: 0, left: 0 });
	}
}
