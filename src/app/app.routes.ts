import { AngularExpensesAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/Expenses/auth-guard';
import { Routes } from '@angular/router';

import { ViewLoggedExpensesComponent } from './dashboard/view-logged-Expenses/view-logged-Expenses.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/ signup/ signup.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);


export const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: ViewLoggedExpensesComponent,
    canActivate: [AngularExpensesAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularExpensesAuthGuard],
    data: {authGuardPipe: redirectLoggedInToDashboard}
  },
  {
    path: 'signUp',
    component: SignUpComponent,
    canActivate: [AngularExpensesAuthGuard],
    data: {authGuardPipe: redirectLoggedInToDashboard}
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AngularExpensesAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];


