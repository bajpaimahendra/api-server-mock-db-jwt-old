import { Component, OnInit, isDevMode } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private API_URL= environment.API_URL;
  Name = environment.Name;

 ngOnInit() {
	
	 console.log(this.API_URL);

	    if (isDevMode()) {
	      console.log('Development!');
	    } else {
	      console.log('Production!');
	    }
	  }

}
