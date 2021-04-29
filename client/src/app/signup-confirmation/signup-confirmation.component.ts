import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup-confirmation',
  templateUrl: './signup-confirmation.component.html',
  styleUrls: ['./signup-confirmation.component.scss']
})
export class SignupConfirmationComponent implements OnInit {

  constructor(public router:Router, public userService:UserService) { }
  userName:string = "";

  ngOnInit(): void {
    this.userName = JSON.parse(sessionStorage.getItem("user")).user.userId;
  }

  userSignin():void {
    this.router.navigate(["user-login"]);
  }
}
