import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { Product } from './product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  products: Product[] = [];

  constructor(
    private cart: ProductCartService,
    private productDataService: ProductDataService) { }
  
  ngOnInit(): void {
    this.productDataService.getAll().subscribe(products => this.products = products);
    this.cart.product.subscribe(resp => (this.removeToCart(resp)));
  }
  
  addToCart(product: Product): void{
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }

  removeToCart(product: Product){
    let item = this.products.find((v1) => v1.id == product.id)!;
    item.stock += product.quantity;
  }
}