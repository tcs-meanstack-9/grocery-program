import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from "./Interface/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  private baseUrl = 'http://localhost:4100/v1/products';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/getallproducts`)
    .pipe(
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addproduct`, product)
    .pipe(
      catchError(this.handleError<any>('addProduct'))
    );
  }

  updateProduct(product): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/updateproduct`, product)
    .pipe(
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct(product): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/deleteproduct?id=${product._id}`)
    .pipe(
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
