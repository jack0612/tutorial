import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JacksSlectSelectionChangeComponent} from './jack-select-selectionChange.component'
  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    JacksSlectSelectionChangeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    BookService
  ]
})
export class SelectionChangeModule { }
