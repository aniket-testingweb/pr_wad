import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  isLogin: boolean = false;

  toggle() {
    this.isLogin = !this.isLogin
  }

  loginObj: any = {
    "email": "",
    "password": ""
  };

  register() {
    localStorage.setItem('user', JSON.stringify(this.loginObj))
    alert('User registered successfully');
    this.toggle()
  }

  onLogin() {
    let data: any = localStorage.getItem('user')
    let user: any = JSON.parse(data)

    if (user) {
      if (user.email == this.loginObj.email) {
        alert('login Success');
        this.router.navigateByUrl('/dashboard');
      } else {
        alert('User not registered');
        return
      }
    } else {
      alert('User not registered');
      return
    }
  }
}

