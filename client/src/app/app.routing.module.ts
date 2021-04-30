import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeSigninComponent } from './employee-signin/employee-signin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { OrderComponent } from './order/order.component';
import { TicketDialogComponent } from './ticket-dialog/ticket-dialog.component';
import { EmployeeSendRequestComponent } from './employee-send-request/employee-send-request.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';

const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"dashboard",component:DashboardComponent},
    {path:"employeeLogin",component:EmployeeSigninComponent},
    {path:"employee-dashboard", component:EmployeeDashboardComponent},
    {path:"employee-signin", component:EmployeeSigninComponent},
    {path:"employee-send-request", component:EmployeeSendRequestComponent},
    {path:"userLogin",component:UserDashboardComponent},
    {path:"cart",component:CartComponent},
    {path:"order",component:OrderComponent},
    {path:"ticket",component:TicketDialogComponent},
    {path:"employeeRequests",component:EmployeeSendRequestComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
