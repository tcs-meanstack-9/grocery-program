import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  nonMatchingPassword:boolean = false;
  adminSelected = {
    addEmployee: false,
    deleteEmployee: false,
    generateReports: false,
  }

  constructor(
    public adminService:AdminService,
    public router:Router
  ) {}

  ngOnInit(): void {
  }

  addEmployee(addEmployeeForm:NgForm) {
    let empForm = addEmployeeForm.value;
    if(empForm.confirmedPassword != empForm.password) {
      this.nonMatchingPassword = true;
    } else {
      this.adminService.addEmployee(addEmployeeForm.value);
      this.nonMatchingPassword = false;
      addEmployeeForm.resetForm();
    }
  }

  deleteEmployee(deleteEmployeeForm:NgForm) {
    this.adminService.deleteEmployee(deleteEmployeeForm.value);
    deleteEmployeeForm.resetForm();
  }

  generateReports() {
    console.log("Generate reports");
  }

  adminFeatureSelected(command:string) {
    for(let c in this.adminSelected) {
      if(c == command) {
        this.adminSelected[command] = !this.adminSelected[command];
      } else {
        this.adminSelected[c] = false;
      }
    }
  }
}
