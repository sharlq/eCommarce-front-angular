import { Component, OnInit } from '@angular/core';
import { Pagination } from '../models/Pagination';
import { Product, ProductBrand, ProductType } from '../models/Product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  brands: ProductBrand[] = [];
  types: ProductType[] = [];
  typeId?: number = 0;
  brandId?: number = 0;
  offset: number = 0;
  sort: number = 0;
  search: string = '';
  timer: any;

  pagination: Pagination = {
    total: 0,
    offset: 0,
    itemsNumber: 6,
  };

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts() {
    this.shopService
      .getProducts({
        offset: this.offset,
        brandId: this.brandId,
        typeId: this.typeId,
        sortingMethod: this.sort,
        search: this.search,
      })
      .subscribe(
        (response) => {
          this.products = response.data;
          this.pagination = response.pagination;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getBrands() {
    this.shopService.getBrands().subscribe(
      (response) => {
        this.brands = [{ id: 0, name: 'All' }, ...response];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getTypes() {
    this.shopService.getTypes().subscribe(
      (response) => {
        this.types = [{ id: 0, name: 'All' }, ...response];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onBrandSelected(brandId: number) {
    this.brandId = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.typeId = typeId;
    this.getProducts();
  }

  onSortSelected(sort: number) {
    this.sort = sort;
    this.getProducts();
  }

  onPageChange(page: number) {
    this.offset = (page - 1) * 6;
    this.getProducts();
  }

  onSearch(search: string) {
    this.search = search;
    this.getProducts();
  }

  onSearchTimer() {
    this.timer = setTimeout(() => {
      this.getProducts();
    }, 500);
  }

  onSearchClear() {
    clearTimeout(this.timer);
  }
}
