import { Component } from "@angular/core";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { DisplayVoteComponent } from './display-vote/display-vote.component';
export const routes =
  [
    { path: '', component: ProductListComponent },
    { path:'products/:productId',component:ProductDetailsComponent },
    { path:'cart', component:CartViewComponent}
  ]