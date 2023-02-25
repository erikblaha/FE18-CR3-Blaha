import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { products, IProducts } from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: IProducts = {} as IProducts;
  id: number = 0;

  constructor(private route: ActivatedRoute, private cs: CartService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = products[this.id];
    });
  }

  addToOrder(meals: IProducts){
    alert("added");
    this.cs.addToOrder(meals)
  }
}

export class MenuComponent {
  products: Array<IProducts> = products;

  constructor(){
    
  }

}
