import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopService } from './shop.service';
import { ShopItemComponent } from './shop-item/shop-item.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { ShopRoutingModule } from './shop-routing.module';
import { BasketService } from '../basket/basket.service';

@NgModule({
  declarations: [ShopComponent, ShopItemComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    SharedModule,
    ShopRoutingModule,
  ],
  providers: [ShopService],
})
export class ShopModule {}
