import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-signin',
  templateUrl: './employee-signin.component.html',
  styleUrls: ['./employee-signin.component.scss']
})
export class EmployeeSigninComponent implements OnInit {
  data = { email: '', password: ''};
  employeeList = [];
  constructor(
    public router: Router,
    public empSer:EmployeeService
  ) { }

  ngOnInit(): void {
    //load all employees into employeeList
  }

  login() {
    if (true) {
      console.log("logged employee in ~~");
      sessionStorage.setItem('employeeLoggedIn', 'true');
      this.router.navigate(['employee-dashboard']);
      
    }
  }
  checkCredentials(){
    
    
    //Is this.data.email in the database as an email? 
    //If so, is that email associated with this password??
    //If yes, log in.
  }
  getEmployees() {
    this.empSer.getEmployees()
      .subscribe((data: any) => this.employeeList = data);
  }
}
