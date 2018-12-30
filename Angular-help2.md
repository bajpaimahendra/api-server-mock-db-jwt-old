### What is lazy-loading ?
	lazy-loading—that is, loading modules on demand, i.e. minimize the amount of code that needs to be loaded at startup.

### What is hostListener and hostBinding
### What is Decorators ?
	Decorators are functions that modify immidiate below classes/functions
	Decorators start by @

### What is providers ?
	providers: An array of dependency injection, providers for services that the component requires. 
### What is Attributes and DOM ?
	Attributes are defined by HTML. Properties are defined by the DOM (Document Object Model).
	<input type="text" id="uName" value="Bob"> 
	html attribute 'value' can not change but dom property 'value' can change because it is in dom (e.g $('#uName').val('Mahendra') )

### What is data binding ?
	communication between component typeClass and template
	class to view by interpolation     {{ }}   e.g.  <button>{{hero.name}}</button>
	class to view by property binding   []     e.g.  <button [disabled]="isUnchanged">Cancel is disabled</button>
	view to class by event binding      ()     e.g.  <button (click)="deleteHero()">Delete hero</button>
	two way binding                    [()]	   e.g   <input [(ngModel)]="name">
	@viewChild
	<ng-content></ng-content
	#template Ref variable
	@ContentChile (get the content of other component from template variable )


### What Renderer2 ?
	to accessing the DOM

	

### What is Property binding ?
	to set a property of a view element  

### asynchronous activities
	promise resolutions, http results, timer events, keypresses and mouse moves.
------------------------------------------------------------------------------------
### Http vs HttpClient
	https://fullstack-developer.academy/angular-http-vs-httpclient/

### How use jquery plugin ?
	https://medium.com/all-is-web/angular-5-using-jquery-plugins-5edf4e642969
	npm install jquery --save
	add js path in .angular-cli.json
	  "scripts": [
        	"../node_modules/jquery/dist/jquery.js",
        	"../node_modules/bootstrap/dist/js/bootstrap.js"
      ],
### How use Bootstrap ?
	https://www.techiediaries.com/angular-bootstrap/#Adding_Bootstrap_4_to_Angular 
	$ npm install --save bootstrap@3
	add css path in .angular-cli.json
 	"styles": [
        	"../node_modules/bootstrap/dist/css/bootstrap.min.css",
        	"styles.css"
      ],


### How to upgrade the CLI ?


Run the below commands - only use "sudo" on Mac/ Linux.

sudo npm uninstall -g angular-cli @angular/cli
npm cache clean --force
sudo npm install -g @angular/cli
---------------------------------------------------------------

### how can we use environment variable in angular2+

	In  environment file, you can write
	export const environment = 
	{
	    production: false,
	    API_URL: 'http://localhost:8080',
	};
	In Component
	import { environment } from '../../environments/environment';
	....
	....

	private API_URL= environment.API_URL;

###
 Mock API -----------------------------
https://medium.com/@kaustubhtalathi/mock-data-for-angular-5-applications-with-json-server-part-1-d377eced223b

1- $ ng new app1-ng5
2- $ cd app1-ng5
3- /app1-ng5 $ npm install json-server --save-dev
4- $ mkdir mocks
5- create data.json inside 'mocks' folder with following sample data
6- 
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
7- script to your package.json file  "mock:server": "json-server --watch mocks/data.json",
8- /app1-ng5 $ npm run mock:server
9- Visit http://localhost:3000 
10- we need to redirect the api calls from 4200(default) to 3000
11-Create a proxy.conf.json file in the root folder and add following script to package.json
12-  "start:proxy": "ng serve --proxy-config proxy.conf.json",
13- Add following code to the proxy.conf.json file:
	{
	    "/posts": {
	      "target": "http://localhost:3000",
	      "secure": false
	    }
	  }
14- in new terminal  $ npm run start:proxy
15- http://localhost:3000/posts AND http://localhost:4200/posts response data is same as now
16 - Opening two terminals and running two commands is not a good idea for everyday development
17 - Install concurrently as a dev dependency
18 - /app1-ng5 $ npm install concurrently --save-dev
19 - Add following script to the package.json file
20 - "start:proxy:mock:server": "concurrently --kill-others \"npm run mock:server\" \"npm run start:proxy\""
21 - /app1-ng5  npm run start:proxy:mock:server
22 - Conclusion: We were able to setup mock api’s using json-server.
     We have also routed api calls from Angular application to json-server. 
    Also, we were able to run both the servers together using concurrently
23 - Problem: Data.json will be too big and tedious to maintain if start keeping everything inside one file
24 - /app1-ng5 $ npm install json-concat --save-dev
25- create 'data' folder inside 'mocks' folder
26 - put multiple json file inside 'data' folder 
27 - Create “concat-json.js” in “mocks” folder and add following script:
28 - Modify package json to generate data.json:
29- "concat:mocks": "node \"./mocks/concat-json.js\""
30- npm run concat:mocks
Notice that “data.json” will be generated and it will have content of all files in 'data' folder
31- Modify proxy.config.json
	{

	"/people": { "target": "http://localhost:3000", "secure": false},

	"/planets": {“target”: “http://localhost:3000","secure": false},

	"/starships": {"target": "http://localhost:3000","secure": false}

	}

$ npm run start:proxy:mock:server
-------------------------------------------------------------------------------------------
