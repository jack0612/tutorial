import { Component } from "@angular/core";
 
 



enum Tabs {
	normal,
	group,
	normalAndGroup,
	nested,
	static,
	dynamic
}


@Component({
  selector: 'cisco-tabs',
  templateUrl: './tab-test.component.html',
  styleUrls: ['./tab-test.component.scss']
})
export class TabTestComponent {
 

	selectedTab = Tabs.normal;

	tabs = Tabs;

	tabChange(e: Tabs): void {
		if (e !== null) {
			this.selectedTab = e;
		}
	}
}