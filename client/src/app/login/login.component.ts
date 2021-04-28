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
     this.router.navigate(['dashboard']);
  }
}
