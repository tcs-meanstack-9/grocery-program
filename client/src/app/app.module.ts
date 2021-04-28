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
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin.service';


const routes: Routes = [
  { path:'',component:HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path:'employeeLogin',component:EmployeeSigninComponent},
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
    AdminComponent,
    EmployeeSendRequestComponent,
    UserDashboardComponent,
    EmployeeUpdateOrderStatusComponent,
    EmployeeUnlockUserComponent,
    EmployeeEditProfileComponent
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
  providers: [UserService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
