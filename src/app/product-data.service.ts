import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { Product } from './product-list/product';

/*
* MANEJA LA CONEXION CON MOCKAPI
*/

const URLproducts = 'https://62b5e2f96999cce2e8fbb52e.mockapi.io/api/products';
const URLcontacts = 'https://62b5e2f96999cce2e8fbb52e.mockapi.io/api/contacts';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {

    return this.http.get<Product[]>(URLproducts)
                .pipe(
                  tap((products: Product[]) => products.forEach(product => product.quantity = 0))
                );
  }
  //public addProducts() {
  //  this.http.post(URLproducts, {
  //    "createdAt": "2022-11-24T15:48:35.637Z",
  //    "name": "Auriculares",
  //    "type": "Apple",
  //    "price": 15,
  //    "stock": 50,
  //    "image": "assets/images/accesorios/cargadorIphone.png",
  //    "clearance": false,
  //    "id": "27"
  //  }).subscribe((product) => {
  //      console.log(product);
  //    });
  //}

  public addContacts(form: FormGroup<any>) {
    console.log(form.value);
    this.http.post(URLcontacts, form.value).subscribe((contact) => {
      console.log(contact)
    });
  }
}


/**
 * [
  {
    "createdAt": "2022-11-24T14:49:31.956Z",
    "name": "Iphone",
    "type": "14 Pro",
    "price": 1490,
    "stock": 5,
    "image": "assets/images/celulares/iphone/iphone_11.jpg",
    "clearance": false,
    "id": "1"
  },
  {
    "createdAt": "2022-11-24T08:46:23.979Z",
    "name": "Iphone",
    "type": "13 Pro Max",
    "price": 1150,
    "stock": 10,
    "image": "assets/images/celulares/samsung/samsung.jpeg",
    "clearance": false,
    "id": "2"
  },
  {
    "createdAt": "2022-11-24T12:27:39.815Z",
    "name": "Iphone",
    "type": "13 Pro",
    "price": 1100,
    "stock": 10,
    "image": "assets/images/celulares/xiaomi/xiaomi.jpg",
    "clearance": false,
    "id": "3"
  },
  {
    "createdAt": "2022-11-24T11:25:51.372Z",
    "name": "Iphone",
    "type": "13",
    "price": 999.99,
    "stock": 15,
    "image": "assets/images/computadoras/apple/macBook.jpg",
    "clearance": true,
    "id": "4"
  },
  {
    "createdAt": "2022-11-23T22:19:07.497Z",
    "name": "Iphone",
    "type": "11 Pro Max",
    "price": 799.99,
    "stock": 10,
    "image": "assets/images/computadoras/asus/asus.jpg",
    "clearance": true,
    "id": "5"
  },
  {
    "createdAt": "2022-11-24T13:24:32.018Z",
    "name": "Iphone",
    "type": "11 Pro",
    "price": 700,
    "stock": 10,
    "image": "assets/images/computadoras/lenovo/lenovo.jpg",
    "clearance": false,
    "id": "6"
  },
  {
    "createdAt": "2022-11-24T06:57:29.906Z",
    "name": "Iphone",
    "type": "11",
    "price": 650,
    "stock": 15,
    "image": "assets/images/accesorios/fundas.jpg",
    "clearance": false,
    "id": "7"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "Iphone",
    "type": "8 plus",
    "price": 490,
    "stock": 5,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": true,
    "id": "8"
  },
  {
    "createdAt": "2022-11-24T14:52:04.820Z",
    "name": "Iphone",
    "type": "8",
    "price": 449.99,
    "stock": 50,
    "image": "assets/images/accesorios/auriculares.jpg",
    "clearance": true,
    "id": "9"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "Samsung",
    "type": "A32",
    "price": 200,
    "stock": 3,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": true,
    "id": "10"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "Samsung",
    "type": "A31",
    "price": 200,
    "stock": 3,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": false,
    "id": "11"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "Samsung",
    "type": "S10",
    "price": 200,
    "stock": 3,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": true,
    "id": "12"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "Xiaomi",
    "type": "Redmi Note 10",
    "price": 350,
    "stock": 7,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": false,
    "id": "13"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "Xiaomi",
    "type": "Redmi Note 9",
    "price": 299.99,
    "stock": 5,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": true,
    "id": "14"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "Xiaomi",
    "type": "Redmi Note 8 Pro",
    "price": 249.99,
    "stock": 5,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": true,
    "id": "15"
  },
  {
    "createdAt": "2022-11-24T15:48:31.234Z",
    "name": "MacBook",
    "type": 'Air 13"',
    "price": 1100,
    "stock": 5,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": false,
    "id": "16"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "MacBook",
    "type": 'Pro 14"',
    "price": 3300,
    "stock": 2,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": true,
    "id": "17"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "Lenovo",
    "type": 'Ideapad 14"',
    "price": 499.99,
    "stock": 4,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": true,
    "id": "18"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "HP",
    "type": "Intel Core i3",
    "price": 439.99,
    "stock": 2,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": false,
    "id": "19"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "Lenovo",
    "type": "Ryzen 3",
    "price": 699.99,
    "stock": 1,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": true,
    "id": "20"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "Asus",
    "type": "Intel Core i3",
    "price": 399.99,
    "stock": 5,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": true,
    "id": "21"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "Asus",
    "type": "Vivobook",
    "price": 799.99,
    "stock": 3,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": true,
    "id": "22"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "Acer",
    "type": "Aspire 5",
    "price": 800,
    "stock": 3,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": false,
    "id": "23"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "Acer",
    "type": "Aspire 5 Ryzen 3",
    "price": 1100,
    "stock": 1,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": false,
    "id": "24"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "Fundas",
    "type": "Apple",
    "price": 4.99,
    "stock": 100,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": true,
    "id": "25"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "Cargadores",
    "type": "Apple",
    "price": 19.99,
    "stock": 100,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": true,
    "id": "26"
  },
  {
    "createdAt": "2022-11-24T15:48:35.637Z",
    "name": "Auriculares",
    "type": "Apple",
    "price": 15,
    "stock": 50,
    "image": "assets/images/accesorios/cargadorIphone.png",
    "clearance": false,
    "id": "27"
  },
]
 */
