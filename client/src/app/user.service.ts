import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/models/model.user';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }

  private baseUrl = 'http://localhost:4100/v1/auth';
  userObj:User = {};

  signup(userLoginForm:any):any {
    this.http.post(`${this.baseUrl}/signup`, userLoginForm).
    subscribe(result=>console.log(result), error=>console.log(error));
    return new Promise((resolve, reject)=>{
      this.http.post(`${this.baseUrl}/signup`, userLoginForm).subscribe(result=>{
        this.userObj = result;
        sessionStorage.setItem("user", JSON.stringify(this.userObj));
        resolve(result);
      }, (err) => {
        reject(err);
      }) 
    });
  }

  login(userLoginForm:any):any {
    return new Promise((resolve, reject)=>{
      this.http.post(`${this.baseUrl}/signin`, userLoginForm).subscribe(result=>{
        this.userObj = result;
        resolve(result);
      }, (err) => {
        reject(err);
      }) 
    });
  }
}