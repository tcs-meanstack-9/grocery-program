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
    this.getEmployees();
    
  }

  login() {
    console.log("checking credentials");
    if (true) {
      console.log("logged employee in ~~");
      sessionStorage.setItem('employeeLoggedIn', 'true');
      console.log("Found Employees: " + this.employeeList);
    }
  }
  checkCredentials(){
    
    //
    //Is this.data.email in the database as an email? 
    //If so, is that email associated with this password??
    //If yes, log in.
    return true;
  }
  getEmployees() {
    console.log("getEmployees() called from SignIn component")
    this.empSer.getEmployees()
      .subscribe((data: any) => this.employeeList = data);
  }
  
}
