import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
@Component({
  selector: 'app-employee-unlock-user',
  templateUrl: './employee-unlock-user.component.html',
  styleUrls: ['./employee-unlock-user.component.scss']
})
export class EmployeeUnlockUserComponent implements OnInit {
  userMsg?: string;
  
  constructor(public detailSer:CustomerService, public userSer:CustomerService) { }

  ngOnInit(): void {
  }

  unlockuser(userRef:any):void{
    console.log(userRef);
    this.userSer.unlockuser(userRef.value.id).subscribe((result:string)=>{
      this.userMsg=result;
    })
  }
}
