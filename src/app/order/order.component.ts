import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../products';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cart: Array<IProducts> = [];

  constructor(private cs: CartService) { }

  ngOnInit(): void {
    this.cart = this.cs.getCart();
  }

  calcSum(): number {
    let sum = 0;
    for (const product of this.cart) {
      sum += product.price;
    }
    return sum;
  }

  calcService(): number {
    return this.calcSum() * 0.1;
  }

  calcDiscount(): number {
    if (this.calcSum() <= 40) {
      return 0;
    }
    return -this.calcSum() * 0.15;
  }

  calcTotal(): number {
    return this.calcSum() + this.calcService() + this.calcDiscount();
  }
}
