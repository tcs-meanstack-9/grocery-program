import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Order} from "./Interface/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient,
  ) { }

  private baseUrl = 'http://localhost:4100/v1/orders';

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/getallOrders`)
    .pipe(
      catchError(this.handleError<Order[]>('getallOrders', []))
    );
  }


  getOrder(userId): Observable<any> {
    console.log(userId);
    return this.http.get<Order[]>(`${this.baseUrl}/getOrder?userId=`+userId)
    .pipe(
      catchError(this.handleError<Order[]>('getorder'))
    );
  }

  addorder(order: Order): Observable<any> {
    console.log(JSON.stringify(order));
    return this.http.post<any>(`${this.baseUrl}/addorder`, order)
    .pipe(
      catchError(this.handleError<any>('addorder'))
    );
  }

  updateOrder(product): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/updateproduct`, product)
    .pipe(
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteOrder(order): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/deleteproduct?id=${order._id}`)
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
