import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(
    public router: Router
  ) {}

  logout() {
    sessionStorage.removeItem('isAdminLoggedIn');
    this.router.navigate(['']);
  }
}
