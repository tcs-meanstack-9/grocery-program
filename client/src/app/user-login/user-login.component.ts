import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketDialogComponent } from '../ticket-dialog/ticket-dialog.component';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import {TicketService} from '../ticket.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  remainingAttempts:number = 3;
  showRemainingAttempts:boolean = false;
  showLockedOut:boolean = false;
  date = new Date();
  constructor(public router: Router, public userService:UserService, public ticketService :TicketService, public dialog: MatDialog) { 
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
    localStorage.setItem("remainingAttempts", '3');

    //if(attempsLeft > 0 || raisedTicketApproved == true) {
    if(attemptsLeft > 0) {
      attemptsLeft--;
      this.remainingAttempts = attemptsLeft;
      this.showRemainingAttempts = true;

      if(attemptsLeft == 0) {
        this.showRemainingAttempts = false;
        this.showLockedOut = true;
        console.log("Please raise a support ticket to log back in.")
      } 

      localStorage.setItem("remainingAttempts", (attemptsLeft).toString());;
      await this.userService.login(userLoginForm);
      this.router.navigate(['user-dashboard']);
    } else {
      this.showRemainingAttempts = false;
    }
  }


  openTicketDialog(ticket?: any) {
    const dialogRef = this.dialog.open(TicketDialogComponent, {
      width: '400px',
      data: ticket || {}
    });
    dialogRef.afterClosed().subscribe(value => {
      if(value.userName && value.email && value.reason )
      {
        value.ticketDate=this.date.toDateString();
        this.ticketService.createticket(value)
        .subscribe((data: any) => {this.gotoUserLogin()});
      }
    });
  }

  gotoUserLogin()
  {
  //  this.router.navigate(['userLogin']);
  }
}