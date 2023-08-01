import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponent } from './material.component';
import { JackMenuComponent } from './jack-menu/jack-menu.component'
import { JackSelectComponent } from './jack-select/jack-select.component'
import { SelectionChangeModule } from './jack-select-selectionChange/selectionChange.module'
import { JacksSlectSelectionChangeComponent } from './jack-select-selectionChange/jack-select-selectionChange.component';
import { BasicDrawerComponent } from './side-nav/basic-drawer/basic-drawer.component';
import { SideNavModule } from './side-nav/side-nav.module';
import { JackStepperComponent } from './jack-stepper/jack-stepper.component'
import { JackTabComponent } from './jack-tab/jack-tab.component'
import { JackTreeDynamicLoadComponent } from './jack-tree-dynamic-load/jack-tree-dynamic-load.component'
import { MatCustomControlModule } from './mat-custom-control/mat-custom-control.module';
import { MatCustomControlParentComponent } from './mat-custom-control/mat-custom-control-parent/mat-custom-control-parent.component';
import { TableComponent } from './table/table.component'
import {MatCalendarComponent} from './mat-calendar/mat-calendar.component'
import { MatCalendarDateClassComponent } from './mat-calendar-date-class/mat-calendar-date-class.component';
import { JackCheckboxComponent } from './jack-checkbox/jack-checkbox.component';
import {JackSidenavComponent} from './jack-sidenav/jack-sidenav.component'
import { MatDateRangePickerComponent } from './mat-date-range-picker/mat-date-range-picker.component';
import { MatDateFormatsComponent } from './mat-date-formats/mat-date-formats.component';
export const routes: Routes = [
  {
    path: 'material',
    component: MaterialComponent,
    children: [
      { path: 'BasicDrawer', component: BasicDrawerComponent },
      { path: 'sidenav', component: JackSidenavComponent },
      { path: 'menu', component: JackMenuComponent },
      { path: 'select', component: JackSelectComponent },
      { path: 'SlectSelectionChange', component: JacksSlectSelectionChangeComponent },
      { path: 'Stepper', component: JackStepperComponent },
      { path: 'Tab', component: JackTabComponent },
      { path: 'TreeDynamicLoad', component: JackTreeDynamicLoadComponent },
      { path: 'MatFormFieldControl', component: MatCustomControlParentComponent },
      { path: 'Table', component: TableComponent },
      { path: 'MatCalendar', component: MatCalendarComponent },
      { path: 'MatDateFormats', component: MatDateFormatsComponent },
      { path: 'MatDateRangePicker', component: MatDateRangePickerComponent },
      { path: 'MatCalendar-dateClass', component: MatCalendarDateClassComponent },
      { path: 'Checkbox', component: JackCheckboxComponent },
    ]
  }
];
@NgModule({
  declarations: [
    MaterialComponent,
    JackMenuComponent,
    JackSelectComponent,
    JackStepperComponent,
    JackTabComponent,
    JackTreeDynamicLoadComponent,
    TableComponent,
    MatCalendarComponent,
    MatCalendarDateClassComponent,
    JackCheckboxComponent,
    JackSidenavComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SelectionChangeModule,
    SideNavModule,
    MatCustomControlModule
  ],
  exports: [
    MaterialComponent,
    RouterModule
  ]
})
export class JackMaterialRoutingModule { }
