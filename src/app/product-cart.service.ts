import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _cartList: Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(product: Product) {
    let item: Product = this._cartList.find((v1) => v1.name == product.name)!;
    if(!item){
      this._cartList.push({... product});
    }
    else {
      item.quantity += product.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

}
