import { Component, OnInit } from '@angular/core';
import { FlexOrderDirective } from '@angular/flex-layout';
import { OrderService } from '../employee.service';
import { CustomerService } from '../employee.service';

@Component({
  selector: 'app-employee-update-order-status',
  templateUrl: './employee-update-order-status.component.html',
  styleUrls: ['./employee-update-order-status.component.scss']
})

export class EmployeeUpdateOrderStatusComponent implements OnInit {
  updateMsg: any;
  customerDetails!:Customer;

  constructor(public orderSer:OrderService, public customerServ:CustomerService) { }
  details!:Order;
  ngOnInit(): void {
  }

  updateStatus(orderRef:any){
    console.log(orderRef)
    if(orderRef.value.newOrderStatus=='Cancelled'){
      this.processRefund(orderRef)
    }
    this.orderSer.updateOrderStatusByID(orderRef.value.orderID,orderRef.value.newOrderStatus).subscribe((result:any)=>{
      this.updateMsg=result.Message;
    })
  }
processRefund(orderRef:any){
  console.log("Inside processRefund");
  this.orderSer.getOrderByID(orderRef.value.orderID).subscribe(result=>this.details=result);
  let refund_amount = (this.details?.orderAmount);
  let customerId = this.details?.customerID;
  this.customerServ.getCustomerById(customerId).subscribe(result=>this.customerDetails=result);
  let refund:number = (refund_amount);
  let funds:number = this.customerDetails?.funds;
  let updated_amt:number = refund + funds;
  this.customerServ.refundCustomerById(customerID,updated_amt).subscribe(result=>console.log(result));

}
}
