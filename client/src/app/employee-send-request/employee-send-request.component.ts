import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Request } from "../Interface/request";
import { RequestService } from "../request.service";
  
  @Component({
    selector: 'app-employee-send-request',
    templateUrl: './employee-send-request.component.html',
    styleUrls: ['./employee-send-request.component.scss']
  })
  export class EmployeeSendRequestComponent implements OnInit {
    data = { empName: '', message: ''};
    date = new Date();
    showSuccessMessage:boolean = false;
    constructor(
      public router: Router,
      public requestService :RequestService
    ) { 
    }
  
    ngOnInit(): void {
      this.showSuccessMessage=false;
    }
  
    sendRequest() {
      var request=new Request();
      request.empName=this.data.empName;
      request.message=this.data.message;
      request.requestDate=this.date.toDateString();
      this.requestService.createrequest(request)
      .subscribe((data: any) => {this.showMessage()});
    }

    showMessage()
    {
      this.showSuccessMessage=true;
    }
  }