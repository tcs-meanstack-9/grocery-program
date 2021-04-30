import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Employee } from './model.employee';
/** 
export interface Employee{
  firstName:string;
  lastName:string;
  email:string;
  id:number;
  phoneNumber:string;
  password:string;
  //Requests.... A list of request objects??
}
*/
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }
  
  public baseUrl = 'http://localhost:4100/v1/employees';
  
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/getallproducts`)
    .pipe(
      catchError(this.handleError<Employee[]>('getProducts', []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      
      console.error(error); // log to console instead


      return of(result as T);
    };
  }
  retrieveAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:4100/v1/employees/getallemployees");
 }
}
