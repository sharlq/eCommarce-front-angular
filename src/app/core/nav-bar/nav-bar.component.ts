import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/accout/auth-service.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IUser } from 'src/app/models/authentication';
import { Basket, IBasket } from 'src/app/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  basket$!: Observable<IBasket | null>;
  user$!: IUser | null;

  constructor(
    private basketService: BasketService,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.authService.currentUser.subscribe((user) => {
      this.user$ = user;
    });
  }

  onLogout() {
    this.authService.logout();
  }
}
