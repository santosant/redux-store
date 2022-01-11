/* eslint-disable @typescript-eslint/no-unused-vars */
export interface IProduct {
  id: number;
  description: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}
