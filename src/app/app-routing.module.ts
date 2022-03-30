import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AuthGuard } from './guards/auth.guard';
import { SingupComponent } from './singup/singup.component';


const routes: Routes = [
  {path: 'home',component: HomeComponent , canActivate: [AuthGuard]},
  {path: 'statistics' , component: StatisticsComponent,canActivate: [AuthGuard] },
  {path: 'register',component:SingupComponent},
  {path: '', component: LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
