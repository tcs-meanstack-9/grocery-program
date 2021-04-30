import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
 import { Request } from "./Interface/request";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient,
  ) { }

  private baseUrl = 'http://localhost:4100/v1/requests';

  getallrequests(): Observable<Request[]> {
    return this.http.get<Request[]>(`${this.baseUrl}/getallrequests`)
    .pipe(
      catchError(this.handleError<Request[]>('getallrequests', []))
    );
  }


 
  createrequest(request: Request): Observable<any> {
    
    return this.http.post<any>(`${this.baseUrl}/createrequest`, request)
    .pipe(
      catchError(this.handleError<any>('createrequest'))
    );
  }


 

  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
