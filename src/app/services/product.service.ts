import { Injectable } from '@angular/core';
import Product from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product: Product;

  constructor() { 
    this.product = {
      name: "Computer",
      price: 1000,
      isForSale: true
    }
  }

  // metodo
  setProductName(name: string): void {
    this.product.name = name;
  }
}
