import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
items:Product [] = [];
 ngOnInit(){
  this.cartService.observable.subscribe(items=>this.items=items);
 }
 constructor(private cartService:CartService){
  
 }
 remove(item:Product){
 this.cartService.remove(item);
 }
}