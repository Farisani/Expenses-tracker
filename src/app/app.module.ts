import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularExpensesAuthModule } from '@angular/Expenses/auth';
import { AngularExpensesModule } from '@angular/Expenses';
import { AngularExpensesAuthGuard } from '@angular/Expenses/auth-guard'

import { AppComponent } from './app.component';
import { ExpensesConfig } from './app.Expenses.config';
import { appRoutes } from './app.routes';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { AngularExpensesDatabaseModule } from '@angular/Expenses/database';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularExpensesModule.initializeApp(ExpensesConfig),
    AngularExpensesDatabaseModule,
    AngularExpensesAuthModule,
    CoreModule,
    LoginModule,
    SignupModule,
    HomeModule,
    DashboardModule],
  providers: [AngularExpensesAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}

