import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module'
import { SnackBarComponent } from './button.component';
@NgModule({
    imports: [MaterialModule],
    declarations: [SnackBarComponent]
})
export class UnitTestButtonModule { }