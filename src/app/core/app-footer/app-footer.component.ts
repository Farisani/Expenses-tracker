import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return (this.router.url === '/home' || this.router.url === '/dashboard');
  }
}