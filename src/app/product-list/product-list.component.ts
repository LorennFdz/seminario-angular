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
  
  products: Product[] = [
    /*{
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
    }*/
  ];

  constructor(
    private cart: ProductCartService,
    private productDataService: ProductDataService) {

  }
  ngOnInit(): void {
    this.productDataService.getAll()
      .subscribe(products => this.products = products);
  }
  
  addToCart(product: Product): void{
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }
}
/*
 *  [
 {
  "createdAt": "2022-11-24T14:49:31.956Z",
  "name": "Iphone",
  "type": "11 Pro Max",
  "price": 1100,
  "stock": 15,
  "image": "assets/images/celulares/iphone/iphone_11.jpg",
  "clearance": false,
  "id": "1"
 },
 {
  "createdAt": "2022-11-24T08:46:23.979Z",
  "name": "Samsung",
  "type": "A21",
  "price": 300,
  "stock": 10,
  "image": "assets/images/celulares/samsung/samsung.jpeg",
  "clearance": false,
  "id": "2"
 },
 {
  "createdAt": "2022-11-24T12:27:39.815Z",
  "name": "Xiaomi",
  "type": "Redmi Note 8 Pro",
  "price": 350,
  "stock": 15,
  "image": "assets/images/celulares/xiaomi/xiaomi.jpg",
  "clearance": true,
  "id": "3"
 },
 {
  "createdAt": "2022-11-24T11:25:51.372Z",
  "name": "MacBook",
  "type": "Pro",
  "price": 450,
  "stock": 15,
  "image": "assets/images/computadoras/apple/macBook.jpg",
  "clearance": true,
  "id": "4"
 },
 {
  "createdAt": "2022-11-23T22:19:07.497Z",
  "name": "Asus",
  "type": "Vivobook",
  "price": 300,
  "stock": 10,
  "image": "assets/images/computadoras/asus/asus.jpg",
  "clearance": false,
  "id": "5"
 },
 {
  "createdAt": "2022-11-24T13:24:32.018Z",
  "name": "Lenovo",
  "type": "Ideapad 3",
  "price": 250,
  "stock": 5,
  "image": "assets/images/computadoras/lenovo/lenovo.jpg",
  "clearance": false,
  "id": "6"
 },
 {
  "createdAt": "2022-11-24T06:57:29.906Z",
  "name": "Fundas",
  "type": "Apple, Xiaomi, Samsung",
  "price": 4,
  "stock": 200,
  "image": "assets/images/accesorios/fundas.jpg",
  "clearance": true,
  "id": "7"
 },
 {
  "createdAt": "2022-11-24T15:48:35.637Z",
  "name": "Cargadores",
  "type": "Apple, Xiaomi, Samsung",
  "price": 10,
  "stock": 200,
  "image": "assets/images/accesorios/cargadorIphone.png",
  "clearance": true,
  "id": "8"
 },
 {
  "createdAt": "2022-11-24T14:52:04.820Z",
  "name": "Auriculares",
  "type": "Apple, Xiaomi, Samsung",
  "price": 10,
  "stock": 50,
  "image": "assets/images/accesorios/auriculares.jpg",
  "clearance": true,
  "id": "9"
 }
] 
 */