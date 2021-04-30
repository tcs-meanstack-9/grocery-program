import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../model.employee';

@Component({
  selector: 'app-employee-signin',
  templateUrl: './employee-signin.component.html',
  styleUrls: ['./employee-signin.component.scss']
})
export class EmployeeSigninComponent implements OnInit {
  data = { email: '', password: ''};
  employeeList = [];
  employees?:Array<Employee>;
  constructor(
    public router: Router,
    public empSer:EmployeeService
  ) { }

  ngOnInit(): void {
    this.empSer.retrieveAllEmployees().subscribe(result=>this.employees=result);
  }

  login(employeeLoginForm:any) {
    if (true) {
      let email = employeeLoginForm.email;
      let password = employeeLoginForm.password;
      for(let i = 0; i < this.employees.length; i ++){
        if (email == this.employees[i].email && password == this.employees[i].password){
          console.log("logged employee in ~~");
          sessionStorage.setItem("loggedInEmployeeId", this.employees[i]._id.toString());
          this.router.navigate(['employee-dashboard']);
        }
      }
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
