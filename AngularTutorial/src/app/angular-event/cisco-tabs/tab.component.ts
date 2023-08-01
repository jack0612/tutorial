import {
	Input, Component, Inject, AfterContentInit, HostListener, HostBinding
} from '@angular/core';
import { TabsComponent } from './tabs.component';

@Component({
	selector: 'msx-tab',
	template: `<ng-content></ng-content>`,
	host: {
		class: "msx-tab sk-font-tab-label"
	},
	styleUrls: ['./tab.component.scss']
})
export class TabComponent implements AfterContentInit {
	@Input() value: string | null = null;
	@HostBinding('class') className = 'msx-tab--active';
	@HostBinding('class.msx-tab--active')
	isSelected: boolean = false;

	@HostListener('keydown')
	onKeydown(event: KeyboardEvent): void {
		/*
		if (event.keyCode === this._keys.ENTER || event.keyCode === this._keys.SPACE) {
			event.stopPropagation();
			event.preventDefault();
			this.select();
		}
		*/
	}

	@HostListener('click')
	select(): void {
		this._tabsComponent.select(this);
	}

	constructor(
		private _tabsComponent: TabsComponent,
	) { }

	ngAfterContentInit(): void {
		this._tabsComponent.register(this);
	}
}
