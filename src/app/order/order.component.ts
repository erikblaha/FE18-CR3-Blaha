import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProducts } from '../products';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cart : Array<IProducts> = [];
  constructor(private cs:CartService){}

  ngOnInit(): void {
    this.cart = this.cs.getCart();
  }
}
