import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [PaginationComponent, SearchHeaderComponent],
  imports: [CommonModule, CoreModule],
  exports: [PaginationComponent, SearchHeaderComponent],
})
export class SharedModule {}
