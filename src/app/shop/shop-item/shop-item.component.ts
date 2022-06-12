import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss'],
})
export class ShopItemComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {}

  addItemToBasket() {
    console.log('addItemToBasket');
    this.basketService.addItemToBasket(this.product);
  }
}
