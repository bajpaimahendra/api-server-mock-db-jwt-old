import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, private AuthService: AuthService) {

   }

   getProducts(){
     var reqHeader = new HttpHeaders(
      //{'Content-Type':'application/json', 'Authorization':'Bearer '+this.AuthService.getToken()}
      {'Authorization':'Bearer '+this.AuthService.getToken()}
     );
     var reqData = {};
     return this.http.get(this.API_URL+'/products', {headers: reqHeader});
   }

   getProductById(productId){
     var reqHeader = new HttpHeaders(
       {'Content-Type': 'application/json', 'Authorization':'Bearer '+this.AuthService.getToken()}
     );
     return this.http.get(this.API_URL+'/products/'+productId, {headers: reqHeader});

   }

   addProduct(frmData){
    var reqHeader = new HttpHeaders(
      {'Content-Type': 'application/json', 'Authorization':'Bearer '+this.AuthService.getToken()}
      
    );
    return this.http.post(this.API_URL+'/products', frmData, {headers: reqHeader} );
   }

   updateProduct(productId, frmData){
    var reqHeader = new HttpHeaders(
      {'Content-Type': 'application/json', 'Authorization':'Bearer '+this.AuthService.getToken()}
      
    );
    return this.http.put(this.API_URL+'/products/'+productId, frmData, {headers: reqHeader} );
   }

   deleteProduct(productId){
    var reqHeader = new HttpHeaders(
      {'Content-Type': 'application/json', 'Authorization':'Bearer '+this.AuthService.getToken()}
      
    );
    return this.http.delete(this.API_URL+'/products/'+productId, {headers: reqHeader} );
   }



}//-- end of class 
