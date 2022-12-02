import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/product';

/*
*  MANEJA LA LOGICA DEL CARRITO 
*/

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  private _cartList: Product[] = [];
  products: Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList);
  
  @Output() product: EventEmitter<Product> = new EventEmitter();

  constructor() { }

  addToCart(product: Product) {
    let item: Product = this._cartList.find((v1) => v1.type == product.type)!;
    if(!item){
      this._cartList.push({... product});
    }
    else {
      item.quantity += product.quantity;
    }
    this.cartList.next(this._cartList);
  }

  total(){
    let suma = 0;
    this._cartList.forEach(product => {
      suma += product.quantity * product.price;
    });
    return suma;
  }

  removeToCart(id: number, product: Product){
    let index = this._cartList.findIndex(i => i.id === id);
    this._cartList.splice(index, 1);
    this.product.emit(product);
  }

  getCart(){
    return this._cartList;
  }
}
