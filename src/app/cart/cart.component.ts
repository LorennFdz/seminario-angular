import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList$: Observable<Product[]>;
  constructor(private cart: ProductCartService) {
      this.cartList$ = cart.cartList.asObservable();
  }
  ngOnInit(): void {
  }

  total() {
    return this.cart.total();
  }
  removeToCart(id: any, product: Product){
    this.cart.removeToCart(id, product);
  }
}
