import { Injectable } from '@angular/core';
import { IProducts } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart : Array<IProducts> = [];
  constructor() { }
  addToOrder (meals: IProducts){
    this.cart.push(meals);
  }
  getCart(){
    return this.cart;
  }
}
