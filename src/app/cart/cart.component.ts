import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/product';
/*
 *  MANEJA LA LOGICA DEL CARRITO 
 */
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
}
