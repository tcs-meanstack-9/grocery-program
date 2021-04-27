import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupConfirmationComponent } from './signup-confirmation/signup-confirmation.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {path:"login", component:LoginComponent},
    {path:"signup", component:SignupComponent},
    {path:"dashboard", component:DashboardComponent},
    {path:"signup-confirmation", component:SignupConfirmationComponent},
    {path:"admin", component:AdminComponent},
    {path:"home", component:HomeComponent},
    {path:"", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }