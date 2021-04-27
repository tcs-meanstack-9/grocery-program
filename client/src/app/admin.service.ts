import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }

  private baseUrl = 'http://localhost:4100/v1/admin';

  addEmployee(employeeForm:any):void {
    this.http.post(`${this.baseUrl}/addEmployee`, employeeForm).
    subscribe(result=>console.log(result), error=>console.error(error));
  }

  deleteEmployee(employeeForm:any):void {
    this.http.post(`${this.baseUrl}/deleteEmployee`, employeeForm).
    subscribe(result=>console.log(result), error=>console.error(error));
  }
}