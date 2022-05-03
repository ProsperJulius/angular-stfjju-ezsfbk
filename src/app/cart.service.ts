import { Product } from './Product';
import { productsService } from './productsService';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable(
  {
    providedIn: 'root'
  }
  )
export class CartService {
  
  items: Product[]=[];
  private subject = new BehaviorSubject(this.items);
  readonly observable=this.subject.asObservable();
  addToCart(product: Product):this {
    const items=this.subject.getValue();
    this.subject.next(
      [...items,product]
    )
    return this;
  }
  remove(itemDel:Product){
    const items=this.subject.getValue();
    this.subject.next(
      [...items.filter(item=>item!==itemDel)]
    )
    return this; 
  }
  
  clearCart():this {
  
    this.subject.next(
        []
  );
  return this;
  }
  

}