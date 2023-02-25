import { Component, } from '@angular/core';
import { CartService } from '../cart.service';
import { products, IProducts } from '../products';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  products: Array<IProducts> = products;

  constructor(private cs: CartService){
    
  }

  addToOrder(meals: IProducts){
    alert("added");
    this.cs.addToOrder(meals)
  }

}