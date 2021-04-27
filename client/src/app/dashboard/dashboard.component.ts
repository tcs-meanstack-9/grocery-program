import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productList = [];
  defaultImg = 'assets/image/groceries.png';
  constructor(
    public dialog: MatDialog,
    public productService: ProductService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
    if(!sessionStorage.getItem('isAdminLoggedIn')) {
      this.router.navigate(['']);
    }
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
}
