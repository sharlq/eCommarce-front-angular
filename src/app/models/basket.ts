import { v4 } from 'uuid';

export interface Item {
  id: string;
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  brand: string;
  type: string;
}

export interface IBasket {
  id: string;
  items: Item[];
}

export class Basket implements IBasket {
  id = v4();
  items: Item[] = [];
}
