import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class DashboardComponent {
  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
  }
}
