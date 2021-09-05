import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    userPassword: new FormControl('', [Validators.required])
  });
  hide = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  /** routing for registraion component */
  userRegistration() {
    this.router.navigate(['/login/user-registration']);
  }

  publicSitRoute() {
    this.router.navigate(['/public-sit']);
  }

  validateLogin() {
    const data = {
      userName: this.loginForm.controls.userName.value,
      userPassword: this.loginForm.controls.userPassword.value
    }
    console.log('login.data:-', data);
  }

}
