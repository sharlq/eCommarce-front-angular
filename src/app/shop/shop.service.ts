import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product, ProductBrand, ProductType } from '../models/Product';
import { map } from 'rxjs';
import { PaginatedResponse } from '../models/Pagination';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts({
    offset,
    brandId = 5,
    typeId,
    sortingMethod,
    search,
  }: {
    offset?: number;
    brandId?: number;
    typeId?: number;
    sortingMethod?: number;
    search?: string;
  }) {
    let params = new HttpParams();

    if (offset) {
      params.append('offset', offset.toString());
    }
    if (true) {
      params.append('brandId', brandId.toString());
    }
    if (typeId) {
      params.append('typeId', typeId.toString());
    }
    return this.http
      .get<PaginatedResponse<Product[]>>(
        this.baseUrl +
          `Product?brandId=${brandId}&typeId=${typeId}&offset=${offset}&sort=${sortingMethod}&search=${
            search ? search : 'WhatTheHellIsWrongWithYou'
          }`
      )
      .pipe();
  }

  getProduct(id: number) {
    return this.http.get<Product>(this.baseUrl + `Product/${id}`);
  }

  getBrands() {
    return this.http.get<ProductBrand[]>(this.baseUrl + 'Product/brands');
  }

  getTypes() {
    return this.http.get<ProductType[]>(this.baseUrl + 'Product/types');
  }
}
