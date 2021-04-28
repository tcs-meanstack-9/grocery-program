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
    this.adminService.addEmployee(addEmployeeForm.value);
    addEmployeeForm.resetForm();
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
