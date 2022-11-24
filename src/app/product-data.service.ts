import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product-list/product';

const URL = 'https://62b5e2f96999cce2e8fbb52e.mockapi.io/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {

    return this.http.get<Product[]>(URL)
                .pipe(
                  tap((products: Product[]) => products.forEach(product => product.quantity = 0))
                );
  }
}
