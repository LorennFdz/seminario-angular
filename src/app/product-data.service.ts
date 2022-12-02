import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  public addContacts(form: FormGroup<any>) {
    console.log(form.value);
    this.http.post(URLcontacts, form.value).subscribe((contact) => {
      console.log(contact)
    });
  }
}