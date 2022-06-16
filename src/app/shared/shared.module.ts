import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
  declarations: [
    PaginationComponent,
    SearchHeaderComponent,
    TextInputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  exports: [
    PaginationComponent,
    SearchHeaderComponent,
    ReactiveFormsModule,
    PaginationModule,
    BsDropdownModule,
    TextInputComponent,
  ],
})
export class SharedModule {}
