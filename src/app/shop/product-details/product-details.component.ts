import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { environment } from 'src/environments/environment';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  baseUrl = environment.baseUrl;
  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.loadProduct(params['id']);
    });
  }

  loadProduct(id: number) {
    this.shopService.getProduct(id).subscribe(
      (response) => {
        this.product = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
