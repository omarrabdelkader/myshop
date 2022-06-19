import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/productModel/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // hatenaha hena 3shan ne2dar ne3mel 3aleha kaza method
  products: Product[] = [
    {
      id: 1,
      img: 'https://i.ibb.co/p1LxYpp/jeans-web-30432.png',
      name: 'J&J Jeans',
      type: 'Pants',
      price: 70,
    },
    {
      id: 2,
      img: 'https://i.ibb.co/1fSq9Qr/zzaametal-p163-026-open-02-1.png',
      name: 'Metal Jacket',
      type: 'Metal',
      price: 120,
    },
    {
      id: 3,
      img: 'https://i.ibb.co/qjjsKf5/627.png',
      name: 'Shoes',
      type: 'Nike AirForce 1',
      price: 55,
    },
    {
      id: 4,
      img: 'https://i.ibb.co/m6CfWjM/download.png',
      name: 'Tee-shirt',
      type: 'Tommy Hilfiger',
      price: 45,
    },
    {
      id: 5,
      img: 'https://i.ibb.co/Jtp8hLF/Nike-Shoes-PNG-Photo.png',
      name: 'Nike Soccer Shoes',
      type: 'Nike',
      price: 180,
    },
    {
      id: 6,
      img: 'https://i.ibb.co/p1LxYpp/jeans-web-30432.png',
      name: "Levi's Jeans",
      type: "Levi's",
      price: 60,
    },
  ];
  constructor() {}

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    // Returns product based on id from products array in the service
    return this.products.find((element) => element.id === id);
  }
}
