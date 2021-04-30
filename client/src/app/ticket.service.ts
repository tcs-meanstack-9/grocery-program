import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
 import { Ticket } from "./Interface/ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private http: HttpClient,
  ) { }

  private baseUrl = 'http://localhost:4100/v1/tickets';

  getalltickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.baseUrl}/getalltickets`)
    .pipe(
      catchError(this.handleError<Ticket[]>('getalltickets', []))
    );
  }


 
  createticket(ticket: Ticket): Observable<any> {
    
    return this.http.post<any>(`${this.baseUrl}/createticket`, ticket)
    .pipe(
      catchError(this.handleError<any>('createticket'))
    );
  }


 

  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
