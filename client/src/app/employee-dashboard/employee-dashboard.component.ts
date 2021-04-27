import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    if(!sessionStorage.getItem('isAdminLoggedIn')) {
      this.router.navigate(['']);
    }
  }

  loadEmployeeDetails(){
    
  }

}
