import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {
  }
  checkLogin(userEmail:string, userPassword:string){
    var reqHeader = new HttpHeaders({'Content-Type':'application/json'});
    var data = {
      "email": userEmail,
      "password": userPassword
    };
    return this.http.post(this.API_URL+'/auth/login', data, {headers: reqHeader} );
    //console.log('User Service');

  }
  getToken(): string{
    return localStorage.getItem('userToken');
  }

  logOut(){
    localStorage.removeItem('userToken');
  }
}//-- end of class
