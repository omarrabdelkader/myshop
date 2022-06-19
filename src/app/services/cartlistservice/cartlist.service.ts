import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/productModel/Product';
@Injectable({
  providedIn: 'root',
})
export class CartlistService {
  private cartItems: Product[] = [];

  constructor() {}
  getCartItems(): Product[] {
    return this.cartItems;
  }
}
