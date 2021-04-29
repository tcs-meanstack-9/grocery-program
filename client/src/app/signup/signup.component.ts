import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  nonMatchingPassword:boolean = false;

  constructor(public router: Router, public userService:UserService) { }

  ngOnInit(): void {
  }

  async signup(userSignupForm:any) {
    if(userSignupForm.confirmedPassword != userSignupForm.password){
      this.nonMatchingPassword = true;
    } else {
      await this.userService.signup(userSignupForm);
      this.router.navigate(["signup-confirmation"])
    }
  }
}