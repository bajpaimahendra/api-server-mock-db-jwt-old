import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  //selector: 'app-test', // As tag        <app-test></app-test>
 // selector: '.app-test', // As class     <div class="app-test"></div>
  selector: '[app-test]', // As attribute  <div app-test></div>
  //templateUrl: './test.component.html', // As file 
  //templateUrl: './test.component.html', // As file 
  template: `  <!-- As in line template -->
  <div>
  Welcome {{ name }}
  <h3>{{ 2+2 }}</h3>
  <h3>{{ 'Welcome ' + name }}</h3>
  <h3>{{ name.length }}</h3>
  <h3>{{ name.toUpperCase() }}</h3>
  <h3>{{ getUser() }}</h3>
  <h3>{{siteUrl}}</h3>
  <!--h3>{{ a = name }}</h3-->
  <input [id]="myId" type="text" value="Mahendra" />
  <input id="{{myId}}" type="text" value="Mahendra" />
  <input [disabled]="isDisabled" type="text" value="Mahendra" />
  <input bind.disabled="isDisabled" type="text" value="Mahendra" />
    <h3 class="text-success">Mahendra</h3>
    <h3 [class]="successClass">Mahendra</h3>
    <h3 [class.text-danger]="hasError">Mahendra</h3>
    <h3 [ngClass]="messageClasses">Mahendra</h3>
    <h3 [style.color]="'orange'">Style Binding</h3>
    <h3 [style.color]="hasError ? 'red' : 'green' ">Style Binding</h3>
    <h3 [ngStyle]="titleStyles">Style Binding 3</h3>
    <button (click)="myClick();">Greet</button>
    {{greeting}}
    <button (click)="greeting='Welcome Bajpai'">Greet2</button>
    <!------ template reference variable -------------->
    <input type="text" #myInput>
    <button (click)="logMessage(myInput.value);">Log</button>
    <!------ Two way binding -------------->
    <input  type="text"  [(ngModel)]="name" />
      <!------ ngIf Directives -------------->
      <h3 *ngIf="false"> come here</h3>
      <h3 *ngIf="hasError; else eBlock"> come here</h3>
      <ng-template #eBlock>
      <h3 > Name is hidden</h3>
      </ng-template>

      <!------ ngSwich Directives -------------->
      <!------ ngFor Directives -------------->
      <div *ngFor="let color of colorArr; index as i ">
      <h3>{{i}} {{color}}</h3>
      </div>
      <div *ngFor="let color of colorArr; first as f ">
      <h3>{{f}} {{color}}</h3>
     <h3> {{parentData1}}</h3>
      </div>
      <button (click)="fireEvent();">Send Event</button>
  </div>
  `,
  //styleUrls: ['./test.component.css']
  styles: [`
  div {
  	border: 1px solid red;
  }
  .text-success{
    color : green;
  }
  .text-danger{
    color : red;
  }
  .text-special{
   font-style: italic;
  }
  `]
})
export class TestComponent implements OnInit {
  @Input() public parentData1;
	public name = 'Mahendra123';
	public siteUrl = window.location.href;
	public myId = 'testId';
	public isDisabled = false;
  public successClass ='text-success';
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    'text-success': this.hasError,
    'text-danger': !this.hasError,
    'text-special':this.isSpecial
  }
  public colorArr = ['red', 'blue', 'green', 'yellow'];
  public titleStyles = {
    'color':"blue",
    'font-style': "italic"
  };
  public greeting = '';
  @Output() public childEvent = new EventEmitter();
	constructor() { }

	ngOnInit() {
	}

  fireEvent(){
    this.childEvent.emit('Hey Bajpai');
  }
	getUser(){
		return "Hello "+ this.name;
	}
  myClick(){
    console.log('come here');
    this.greeting='Welcome Here';
  }
logMessage(v){
 console.log(v);
}
}
