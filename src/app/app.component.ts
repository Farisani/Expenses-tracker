import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularExpensesAuth } from '@angular/Expenses/auth';
import { Router } from '@angular/router';

import * as Expenses from 'Expenses.sql';
import { User } from 'Expenses.sql';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  user: Observable<Expenses.User>;
  loggedInSubscription: Subscription;

  constructor(private router: Router,
              private afAuth: AngularExpensesAuth,
              private loginService: LoginService) {

    this.loggedInSubscription = afAuth.authState.subscribe((authData: User) => {
      if (authData && authData.email) {
        this.loginService.setUserId(authData.uid);
        this.loginService.setUser(authData);
        this.loginService.announceUserIdCreated('user created!');
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.loggedInSubscription.unsubscribe();
  }
}
