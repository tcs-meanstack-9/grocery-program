import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit-profile',
  templateUrl: './employee-edit-profile.component.html',
  styleUrls: ['./employee-edit-profile.component.scss']
})
export class EmployeeEditProfileComponent implements OnInit {
  updateMsg?: string;

  constructor(public editSer:EmployeeService) { }

  ngOnInit(): void {
  }

  updatePass(passwordRef:any){
    this.editSer.updatePassword(passwordRef.value.id).subscribe((result:string)=>{
      this.updateMsg=result;
    })
  }
}
