import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data = { name: '', password: ''};
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.data.name === 'admin' && this.data.password === 'password') {
      sessionStorage.setItem('isAdminLoggedIn', 'true');
      this.router.navigate(['dashboard']);
    }
  }

}
