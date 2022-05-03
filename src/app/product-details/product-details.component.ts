import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { productsService } from '../productsService';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
product:Product |undefined;
  
constructor(private route:ActivatedRoute,
            private productsService:productsService,
            private cartService:CartService
          ){

}
ngOnInit(){
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute=Number(routeParams.get('productId'));
  this.product = this.productsService.getProduct(productIdFromRoute);
  
}
addToCart(product:Product){
this.cartService.addToCart(product);
}
}