import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ShopService } from 'src/app/shop/shop.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  backendUrl: string = environment.baseUrl;
  product!: Product;
  @Input() id!: number;
  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.shopService.getProduct(this.id).subscribe((product) => {
      this.product = product;
    });
  }
}
