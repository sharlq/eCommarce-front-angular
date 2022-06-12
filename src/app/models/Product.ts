export interface ProductType {
  id: number;
  name: string;
}

export interface ProductBrand {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  productType: ProductType;
  productTypeId: number;
  productBrand: ProductBrand;
  productBrandId: number;
}
