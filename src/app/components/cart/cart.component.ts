// PLEASE CHECK THE README FILE FIRST!

import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/productModel/Product';
import { Message } from 'src/app/models/messageModel/Message';
import { CartlistService } from 'src/app/services/cartlistservice/cartlist.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItem: Product[] = [];
  checkOut: Message[] = [];

  fullName: string = '';
  email: string = '';
  address: string = '';
  creditCard: string = '';
  payment: number = 1;

  constructor(private cartListService: CartlistService) {}
  ngOnInit(): void {
    this.cartItem = this.cartListService.getCartItems();
  }

  CalculateTotalPrice(): number {
    let totalPrice = 0;
    this.cartItem.map((chosenItem) => {
      totalPrice += chosenItem.price;
    });
    return totalPrice;
  }
  DeleteItem(addedItem: Product) {
    const indexOfCartItem = this.cartItem.indexOf(addedItem);
    this.cartItem.splice(indexOfCartItem, 1);
  }

  AddMessage() {
    if (this.CalculateTotalPrice() === 0) {
      window.alert('Please notice that your cart is empty!');
    } else {
      const post: Message = {
        fullName: this.fullName,
        email: this.email,
        address: this.address,
        creditCard: this.creditCard,
        payment: this.CalculateTotalPrice(),
      };

      this.checkOut.push(post);
      console.log(this.checkOut);
      window.alert(`Thank you, ${this.fullName}! See you soon!`);
      this.fullName = '';
      this.email = '';
      this.address = '';
      this.creditCard = '';
      this.payment = 1;
    }
  }
}
