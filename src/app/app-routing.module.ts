import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ItemComponent } from './components/item/item.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product/:productId', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
