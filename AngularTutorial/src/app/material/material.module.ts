
import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { A11yModule } from '@angular/cdk/a11y';
import { MatDateRangePickerComponent } from './mat-date-range-picker/mat-date-range-picker.component';
import { MatDateFormatsComponent } from './mat-date-formats/mat-date-formats.component';

const MatModules = [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MomentDateModule,
    MatRadioModule,
    MatGridListModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatSidenavModule,
    MatDividerModule,

    MatStepperModule,
    MatTreeModule,
    MatExpansionModule,
    MatListModule,
    MatCheckboxModule,
    A11yModule

]

@NgModule({
    imports: [...MatModules],
    exports: [...MatModules],
    declarations: [MatDateRangePickerComponent, MatDateFormatsComponent],
})
export class MaterialModule {
}

