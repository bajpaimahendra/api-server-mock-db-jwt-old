import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private AuthService: AuthService, private router: Router) { 

  }

  ngOnInit() {
  }
  Logout(){
    this.AuthService.logOut();
    this.router.navigate(['/login']);

    console.log('come here');
  }

}// -- end of class
