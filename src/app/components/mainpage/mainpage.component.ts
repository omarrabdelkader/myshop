// PLEASE CHECK THE README FILE FIRST!

import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/productModel/Product';
import { ProductService } from 'src/app/services/productservice/product.service';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
