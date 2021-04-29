import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  remainingAttempts:number = 3;
  showRemainingAttempts:boolean = false;

  constructor(public router: Router, public userService:UserService) { 
  }

  ngOnInit(): void {
    let attemptsLeft = localStorage.getItem("remainingAttempts");

    if(attemptsLeft === null) {
      localStorage.setItem("remainingAttempts", '3');
    }

    if(parseInt(attemptsLeft) != 3) {
      this.remainingAttempts = parseInt(attemptsLeft);
      this.showRemainingAttempts = true;
    }
  }

  async login(userLoginForm:any) {
    let attemptsLeft = parseInt(localStorage.getItem("remainingAttempts"));

    // For testing: Use to reset the number of login attempts until raising a ticket is finished
    //localStorage.setItem("remainingAttempts", '3');

    //if(attempsLeft > 0 || raisedTicketApproved == true) {
    if(attemptsLeft > 0) {
      attemptsLeft--;
      localStorage.setItem("remainingAttempts", (attemptsLeft).toString());;

      this.remainingAttempts = attemptsLeft;
      this.showRemainingAttempts = true;

      await this.userService.login(userLoginForm);
      this.router.navigate(['user-dashboard']);
    } else {
      console.log("Please raise a support ticket to log back in.")
    }
  }
}