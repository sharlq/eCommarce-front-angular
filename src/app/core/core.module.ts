import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule, PaginationModule.forRoot(), RouterModule],
  exports: [NavBarComponent, PaginationModule],
})
export class CoreModule {}
