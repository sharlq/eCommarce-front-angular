import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  basket$ = this.basketService.basket$;
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {}

  onIncreaseQuantity(item: any) {
    if (!item) return;
    this.basketService.addItemToBasket(item, 1);
  }
  onDecreaseQuantity(item: any) {
    if (!item) return;
    this.basketService.addItemToBasket(item, -1);
  }
}
