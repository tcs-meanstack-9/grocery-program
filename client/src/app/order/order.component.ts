import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService} from '../cart.service';
import { Order } from '../Interface/order';
import { Product } from "../Interface/product";
import { OrderService } from '../order.Service';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderList=[];
  date = new Date();
  defaultImg = 'assets/image/groceries.png';
  constructor(
    public orderService :OrderService,
   
    public router: Router
  ) {}


  ngOnInit(): void {
    var userValue=JSON.parse(sessionStorage.getItem('user'));
    var user=userValue.user;
    this.orderService.getOrder(user.userId)
    .subscribe((data: any) => this.orderList = data);
    
  }

  logout() {
    sessionStorage.removeItem('isAdminLoggedIn');
    this.router.navigate(['user-login']);
  }

  gotoProductList()
  {
    this.router.navigate(['userLogin']);
  }
   

  

  

  getOrders() {
    console.log("called");
    this.orderService.getOrders()
      .subscribe((data: any) => this.orderList = data);
  }



   
}
   
  

 




