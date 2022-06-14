import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { BasketRoutingModule } from './basket-routing.module';
import { BasketService } from './basket.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BasketComponent],
  imports: [CommonModule, RouterModule, BasketRoutingModule],
})
export class BasketModule {}
