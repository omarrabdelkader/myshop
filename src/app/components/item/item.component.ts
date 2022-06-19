// PLEASE CHECK THE README FILE FIRST!


import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/productModel/Product';
import { ProductService } from 'src/app/services/productservice/product.service';
import { CartlistService } from 'src/app/services/cartlistservice/cartlist.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  detailedProduct: Product | undefined;

  constructor(
    private productService: ProductService,
    private itemRoute: ActivatedRoute,
    private cartListService: CartlistService
  ) {}

  ngOnInit(): void {
    const routeParams = this.itemRoute.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.detailedProduct = this.productService.getProduct(productIdFromRoute);
  }

  AddCart(detailedProduct: Product | undefined) {
    this.cartListService.getCartItems().push(detailedProduct!);
    window.alert('Product has been add to your chart!');
  }
}
