export class Message {
  fullName: string;
  email: string;
  address: string;
  creditCard: string;
  payment: number;
  constructor() {
    this.fullName = '',
    this.address = '',
    this.creditCard = '',
    this.email = '',
    this.payment = 1;
  }
}
