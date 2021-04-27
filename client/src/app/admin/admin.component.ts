import { Component, OnInit } from '@angular/core';
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
    public adminService:AdminService
  ) {}

  ngOnInit(): void {
  }
  
  toggleAddEmployee() {
    this.adminFeatureSelected("addEmployee");
  }

  toggleDeleteEmployee() {
    this.adminFeatureSelected("deleteEmployee");
  }

  async addEmployee(addEmployeeForm:any) {
    await this.adminService.addEmployee(addEmployeeForm);
  }

  async deleteEmployee(deleteEmployeeForm:any) {
    await this.adminService.deleteEmployee(deleteEmployeeForm);
  }


  generateReports() {
    this.adminFeatureSelected("generateReports");
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
