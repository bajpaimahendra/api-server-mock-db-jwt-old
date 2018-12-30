import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  private pageName:string;
  private isWelcomePage:boolean=false;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(
      params=>{
        this.pageName = params['page'];
      }
    );
    //console.log(this.pageName);
    if(this.pageName=='Dashboard'){
      this.isWelcomePage=true;
    }
    if(!this.pageName){
      this.pageName='Dashboard';
      this.isWelcomePage=true;
    }
   }

  ngOnInit() {
  }

}//end of class 
