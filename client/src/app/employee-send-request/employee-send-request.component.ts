import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-employee-send-request',
  templateUrl: './employee-send-request.component.html',
  styleUrls: ['./employee-send-request.component.scss']
})
export class EmployeeSendRequestComponent implements OnInit {

  constructor(public productSer:ProductService) { }

  ngOnInit(): void {
  }

  updateProduct(productRef:any){
    console.log(productRef);
    this.productSer.updateProduct(productRef);
  }
}
