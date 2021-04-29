import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public router: Router, public userService:UserService) { }

  ngOnInit(): void {
  }

  async signup(userLoginForm:any) {
    await this.userService.signup(userLoginForm);
    this.router.navigate(["signup-confirmation"])
  }
  
  userSignin():void {
   this.router.navigate(["login"]);
  }
}
