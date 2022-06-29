import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { TextInputComponent } from './text-input/text-input.component';

import { HomeSectionComponent } from './home-section/home-section.component';
import { FullCardComponent } from './full-card/full-card.component';
import { RouterModule } from '@angular/router';
import { RecommendedProductsComponent } from './recommended-products/recommended-products.component';
import { ProductComponent } from './recommended-products/product/product.component';

@NgModule({
  declarations: [
    PaginationComponent,
    SearchHeaderComponent,
    TextInputComponent,
    HomeSectionComponent,
    FullCardComponent,
    RecommendedProductsComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    RouterModule,
    BsDropdownModule.forRoot(),
  ],
  exports: [
    PaginationComponent,
    SearchHeaderComponent,
    ReactiveFormsModule,
    PaginationModule,
    BsDropdownModule,
    TextInputComponent,
    HomeSectionComponent,
    RecommendedProductsComponent,
  ],
})
export class SharedModule {}
