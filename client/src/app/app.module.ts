import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material/material.module';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component';
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { SignupConfirmationComponent } from './signup-confirmation/signup-confirmation.component';

import { HomeComponent } from './home/home.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeSigninComponent } from './employee-signin/employee-signin.component';
import { EmployeeSendRequestComponent } from './employee-send-request/employee-send-request.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EmployeeUpdateOrderStatusComponent } from './employee-update-order-status/employee-update-order-status.component';
import { EmployeeUnlockUserComponent } from './employee-unlock-user/employee-unlock-user.component';
import { EmployeeEditProfileComponent } from './employee-edit-profile/employee-edit-profile.component';
import { AdminService } from './admin.service';
import { UserLoginComponent } from './user-login/user-login.component';

import { CartService } from './cart.service';	
import { CartComponent } from './cart/cart.component';	
import { OrderService } from "./order.Service";	
import { OrderComponent } from './order/order.component';
import { TicketDialogComponent } from "./ticket-dialog/ticket-dialog.component";

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path:'employeeLogin',component:EmployeeSigninComponent},
  {path:'employeeRequests',component:EmployeeSendRequestComponent},
  { path:"userLogin",component:UserDashboardComponent},	
  { path:"cart",component:CartComponent},	
  { path:"order",component:OrderComponent},
  { path:"ticket",component:TicketDialogComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ProductDialogComponent,
    LoginComponent,
    SignupComponent,
    SignupConfirmationComponent,
    HomeComponent,
    EmployeeDashboardComponent,
    EmployeeSigninComponent,
    UserDashboardComponent,
    EmployeeSendRequestComponent,
    UserDashboardComponent,
    EmployeeUpdateOrderStatusComponent,
    EmployeeUnlockUserComponent,
    EmployeeEditProfileComponent,
    UserLoginComponent,
    CartComponent,	
    OrderComponent,
    TicketDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, AdminService, CartService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }