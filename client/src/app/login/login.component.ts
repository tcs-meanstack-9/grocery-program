import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public userService:UserService) { 
  }

  ngOnInit(): void {
  }

  async login(userLoginForm:any) {
     let userObj = await this.userService.login(userLoginForm);
     console.log(userObj.userId)
     sessionStorage.setItem('UserId', userObj.userId);
     this.router.navigate(['userLogin']);
  }
  // login() {
  //   if (this.data.name === 'admin' && this.data.password === 'password') {
  //     sessionStorage.setItem('isAdminLoggedIn', 'true');
  //     this.router.navigate(['dashboard']);
  //   }
  // }
 
  signup(): void {
    this.router.navigate(['signup']);
  }
}
