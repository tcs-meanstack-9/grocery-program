import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService} from '../cart.service';
import { Order } from '../Interface/order';
import { Product } from "../Interface/product";
import { OrderService } from '../order.Service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts =[];
  orderList=[];
  date = new Date();
  defaultImg = 'assets/image/groceries.png';
  constructor(
    public cartService : CartService,
    public orderService :OrderService,
   
    public router: Router
  ) {}


  ngOnInit(): void {
    this.cartProducts= this.cartService.getItems();

    
  }

  logout() {
    sessionStorage.removeItem('isAdminLoggedIn');
    this.router.navigate(['login']);
  }

  gotoProductList()
  {
    this.router.navigate(['userLogin']);
  }
   

  async placeOrder()
  {
    this.date=new Date();
   // let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
      var userValue=JSON.parse(sessionStorage.getItem('user'));
     var user=userValue.user;
   
    var order : Order =new Order();
    order.id="0";
    order.firstName=user.firstName;
    order.firstName=user.firstName,
    order.lastName=user.lastName,
    order.address=user.address,
    order.userId=user.userId,
    order.email=user.email,
    order.phoneNumber=user.phoneNumber,
    order.orderDate=this.date.toDateString();
    
    order.products=this.cartProducts;
    order.orderAmount=0;
    order.products.forEach(function(product)
    {
      order.orderAmount+=product.cartQuantity *Number(product.price);

    });

  // console.log(JSON.stringify(order));
   await this.orderService.addorder(order)
   .subscribe((data: any) => {this.gotoOrders()});;
  }

  gotoOrders()
  {
    this.router.navigate(['order']);
  }

  getOrders() {
    console.log("called");
    this.orderService.getOrders()
      .subscribe((data: any) => this.orderList = data);
  }

  increaseQuantity(product :Product) {
    console.log(product.cartQuantity);
    if(typeof product.cartQuantity =='undefined' || product.cartQuantity == NaN)
    {
      product.cartQuantity=1;
      this.cartService.addToCart(product);
    }
    else{
      product.cartQuantity++;
      this.cartService.updateQuantity(product.name,product.cartQuantity);
      // product.cartQuantity= (+product.cartQuantity+1).toString();
    }
   
    
  }

  decreaseQuantity(product:Product) {
    
    if(product.cartQuantity>1)
    {
     product.cartQuantity--;
     this.cartService.updateQuantity(product.name,product.cartQuantity);
    }
    else{
      if(product.cartQuantity==1)
      {
      this.cartService.deleteProductFromCart(product.name); 
      }
      product.cartQuantity=0;
    }
  
   
  }


   
   
   
  }

 




