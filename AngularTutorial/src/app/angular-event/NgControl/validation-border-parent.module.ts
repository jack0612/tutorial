import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationBorderModule } from './validation-border.module';
import { ValidationBorderParentComponent } from './validation-border-parent.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ValidationBorderModule],
  declarations: [ValidationBorderParentComponent],
  exports: [ValidationBorderParentComponent]
})
export class ValidationBorderParentModule {}