import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PaginationModule } from './pagination/pagination.module';
import { GBPtoEURPipe } from './pipes/pound-to-euro.pipe';

@NgModule({
  imports: [CommonModule, PaginationModule ],
  exports: [ CommonModule, FormsModule, PaginationModule, GBPtoEURPipe ],
  declarations: [ GBPtoEURPipe ]
})
export class SharedModule { }
