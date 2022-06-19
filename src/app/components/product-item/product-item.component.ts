// PLEASE CHECK THE README FILE FIRST!

import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/productModel/Product';
import { CartlistService } from 'src/app/services/cartlistservice/cartlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() item: Product = {
    id: 0,
    img: '',
    name: '',
    price: 0,
    type: '',
  };
  
  constructor(private cartListService: CartlistService) {}
  
  addToCart(item: Product) {
    this.cartListService.getCartItems().push(item);
    window.alert('Product has been added to your cart!');
  }


  ngOnInit(): void {}
}
