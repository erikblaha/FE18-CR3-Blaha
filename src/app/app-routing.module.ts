import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [{
  path: "", component: HomeComponent
}, {
  path: "menu", component: MenuComponent
}, {
  path: "order", component: OrderComponent
},{
  path: "menu/:id", component: DetailsComponent
}, {
  path: "about-us", component: AboutUsComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
