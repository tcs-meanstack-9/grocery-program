import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { ProductService } from '../product.service';
import { CartService} from '../cart.service';
import { Product } from "../Interface/product";


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  productList = new Array<Product>();
  cartProducts =new Array<Product>();
  defaultImg = 'assets/image/groceries.png';
  constructor(
    public dialog: MatDialog,
    public productService: ProductService,
    public cartService : CartService,
    public router: Router
  ) {}


  ngOnInit(): void {
    this.productService.getProducts()
    .subscribe((data: any) => this.productList = data);
    for(var i=0;i<this.productList.length;i++)
    {
      this.productList[i].cartQuantity=0;
    }
  }
 

  logout() {
    sessionStorage.removeItem('isAdminLoggedIn');
    this.router.navigate(['login']);
  }

  addToCart(product :Product) {
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

    product.subTotal= Number(product.price) * product.cartQuantity;
   
    
  }

  deleteProduct(product:Product) {
    
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

    product.subTotal= Number(product.price) * product.cartQuantity;
  
   
  }

  checkOut()
  {
    
    this.router.navigate(['cart']);
  }

  clearCart() {
    this.productList.forEach(function(item)
    {
      item.cartQuantity=0;
      item.subTotal=0;
    })
   this.cartService.clearCart();
  }



}
