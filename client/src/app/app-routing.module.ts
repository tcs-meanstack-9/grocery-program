import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupConfirmationComponent } from './signup-confirmation/signup-confirmation.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent} from './user-dashboard/user-dashboard.component';

const routes: Routes = [
    {path:"login", component:LoginComponent},
    {path:"signup", component:SignupComponent},
    {path:"dashboard", component:DashboardComponent},
    {path:"userLogin",component:UserDashboardComponent},
    {path :"cart",component:CartComponent},
    {path: "signup-confirmation", component:SignupConfirmationComponent},
    {path:"", redirectTo:"login", pathMatch:"full"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  