import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [NavBarComponent, FooterComponent],
})
export class CoreModule {}
