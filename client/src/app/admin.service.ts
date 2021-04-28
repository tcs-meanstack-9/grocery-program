import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http:HttpClient) { }

  private baseUrl = 'http://localhost:4100/v1/admin';

  addEmployee(employeeForm:any):any {
    return new Promise((resolve, reject)=>{
      this.http.post(`${this.baseUrl}/addEmployee`, employeeForm).subscribe(result=>{
        resolve(result);
      }, (err) => {
        reject(err);
      })
    });
  }

  deleteEmployee(employeeForm:any):any {
    return new Promise((resolve, reject)=>{
      this.http.post(`${this.baseUrl}/deleteEmployee`, employeeForm).subscribe(result=>{
        resolve(result);
      }, (err) => {
        reject(err);
      })
    });
  }
}