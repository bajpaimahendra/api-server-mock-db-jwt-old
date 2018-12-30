import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginFrm') loginFrm: NgForm; // to get the values from Form
  isLoginError: boolean = false;
  uEmail = '';
  uPassword = '';
  constructor(private AuthService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log('--Jmd.....');
  }

  onSubmit() {
    this.uEmail = this.loginFrm.value.userEmail;
    this.uPassword = this.loginFrm.value.userPassword;

    this.AuthService.checkLogin(this.uEmail, this.uPassword)
      .subscribe(
        (data: any) => {
          //console.log(data);
          localStorage.setItem('userToken', data.access_token);
          //console.log(data.access_token);
          this.router.navigate(['/welcome']);
        },
        (err: HttpErrorResponse) => {
          this.isLoginError = true;
          //console.log(HttpErrorResponse);
        }
      );
    //console.log(this.loginFrm);
  }

}
