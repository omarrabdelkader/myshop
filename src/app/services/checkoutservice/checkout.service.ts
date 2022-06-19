import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/messageModel/Message';
@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  cartCheckOut: Message[] = [];
  constructor() {}
  getCheckOut() {
    return this.cartCheckOut;
  }
}
