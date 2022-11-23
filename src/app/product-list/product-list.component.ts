import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from './product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  products: Product[] = [
    {
      image: 'assets/images/celulares/iphone/iphone_11.jpg',
      name: 'Iphone',
      type: '11 Pro Max',
      price: 1100,
      stock: 5,
      quantity: 0,
      clearance: true,
    },
    {
      image: 'assets/images/celulares/samsung/samsung.jpeg',
      name: 'Samsung',
      type: 'A21',
      price: 350,
      stock: 0,
      quantity: 0,
      clearance: true,
    },
    {
      image: 'assets/images/celulares/xiaomi/xiaomi.jpg',
      name: 'Xiaomi',
      type: 'Redmi Note 8 Pro',
      price: 350,
      stock: 3,
      quantity: 0,
      clearance: false,
    },
    {
      image: 'assets/images/computadoras/apple/macBook.jpg',
      name: 'MacBook',
      type: 'Pro',
      price: 350,
      stock: 0,
      quantity: 0,
      clearance: false,
    },
    {
      image: 'assets/images/computadoras/asus/asus.jpg',
      name: 'Asus',
      type: 'Vivobook',
      price: 350,
      stock: 0,
      quantity: 0,
      clearance: false,
    },
    {
      image: 'assets/images/computadoras/lenovo/lenovo.jpg',
      name: 'Lenovo',
      type: 'Ideapad 5',
      price: 350,
      stock: 3,
      quantity: 0,
      clearance: false,
    },
    {
      image: 'assets/images/accesorios/fundas.jpg',
      name: 'Fundas',
      type: 'Apple, Xiaomi, Samsung',
      price: 350,
      stock: 3,
      quantity: 0,
      clearance: false,
    },
    {
      image: 'assets/images/accesorios/cargadorIphone.png',
      name: 'Cargadores',
      type: 'Apple, Xiaomi',
      price: 350,
      stock: 3,
      quantity: 0,
      clearance: false,
    },
    {
      image: 'assets/images/accesorios/auriculares.jpg',
      name: 'Auriculares',
      type: 'Inalambricos',
      price: 350,
      stock: 0,
      quantity: 0,
      clearance: false,
    }
  ];

  constructor(private cart: ProductCartService) {

  }
  ngOnInit(): void {
  }
  
  addToCart(product: Product): void{
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }
}
