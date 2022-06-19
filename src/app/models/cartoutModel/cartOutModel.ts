export class CartOut {
  id: number;
  fullName: string;
  email: string;
  payment: number;

  constructor() {
    this.id = 1;
    this.fullName = '';
    this.email = '';
    this.payment = 1;
  }
}
