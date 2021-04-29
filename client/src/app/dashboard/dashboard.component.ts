import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { ProductService } from '../product.service';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';
import { OrderService } from '../order.Service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  productList = [];
  defaultImg = 'assets/image/groceries.png';
  orderList = [];
  reportedProducts = [];
  grandTotal = 0;
  showReport:boolean = false;
  nonMatchingPassword:boolean = false;
  showAddEmployee:boolean = false;
  showDeleteEmployee:boolean = false;

  constructor(
    public dialog: MatDialog,
    public productService: ProductService,
    public adminService:AdminService,
    public orderService:OrderService,
    public router: Router
  ) {}

  ngOnInit(): void {
    // this.getProducts();
    // if(!sessionStorage.getItem('isAdminLoggedIn')) {
    //   this.router.navigate(['']);
    // }
    this.orderService.getOrders().subscribe((data: any) => this.orderList = data);
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe((data: any) => this.productList = data);
  }

  openProductDialog(product?: any) {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '400px',
      data: product || {}
    });
    dialogRef.afterClosed().subscribe(value => {
      if (value._id) {
       this.productService.updateProduct(value)
       .subscribe((data: any) => {this.getProducts()});
      } else if (value.name || value.price) {
        this.productService.addProduct(value)
        .subscribe((data: any) => {this.getProducts()});
      }
    });
  }
  
  deleteProduct(product: any) {
    this.productService.deleteProduct(product).subscribe((data: any) => {this.getProducts()});
  }

  logout() {
    sessionStorage.removeItem('isAdminLoggedIn');
    this.router.navigate(['login']);
  }

  addEmployee(addEmployeeForm:NgForm) {
    let empForm = addEmployeeForm.value;
    if(empForm.confirmedPassword != empForm.password) {
      this.nonMatchingPassword = true;
    } else {
      this.adminService.addEmployee(addEmployeeForm.value);
      this.nonMatchingPassword = false;
      addEmployeeForm.resetForm();
    }
  }

  deleteEmployee(deleteEmployeeForm:NgForm) {
    this.adminService.deleteEmployee(deleteEmployeeForm.value);
    deleteEmployeeForm.resetForm();
  }

  generateReports() {
    let dupe:boolean = false;
    this.reportedProducts = [];
    this.grandTotal = 0;
  
    this.orderList.forEach(order =>{
      for(let i in order.products) {
        for(let j in this.reportedProducts) {
          if(order.products[i].name == this.reportedProducts[j].name) {
            this.reportedProducts[j].quantity = parseInt(this.reportedProducts[j].quantity) + parseInt(order.products[i].cartQuantity);
            this.reportedProducts[j].total = parseInt(this.reportedProducts[j].quantity) * parseInt(this.reportedProducts[j].price);
            dupe = true;
          }
        }
        if(!dupe) {
          this.reportedProducts.push({
            date:order.orderDate,
            name:order.products[i].name,
            price:order.products[i].price,          
            quantity:order.products[i].cartQuantity,
            total: parseInt(order.products[i].price) * parseInt(order.products[i].cartQuantity)
          });
        }
        dupe = false;
      }
    });
    for(let product of this.reportedProducts) {
      this.grandTotal += product.total;
    }
    this.showReport = !this.showReport;
  }
  }