import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BasketService } from './basket/basket.service';
import { AuthServiceService } from './accout/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'front';

  constructor(
    private basketService: BasketService,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.loadBasket();
    this.authService.loadCurrentUser();
  }

  loadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe(
        () => {
          console.log('basket retrieved');
        },
        (error) => {
          console.log('basket not retrieved', error.message);
        }
      );
    }
  }
}
