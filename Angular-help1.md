--Gaurd---
	https://dzone.com/articles/implementing-guard-in-angular-5-app
	https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3

what is server side rendering
what is rendering with node
what is head of compilation
what is AOT
what is socket.io
what is PWA
what is Universal
what is AMP
what is shadow DOM ?
how viewEncapsulation works ?
@viewChild
<ng-content></ng-content>
	Attach token with each request
	https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8

### project Structure
	https://thinkster.io/tutorials/building-real-world-angular-2-apps
	https://github.com/gothinkster/angular-realworld-example-app
https://github.com/KrunalLathiya/Angular5CRUD/blob/master/src/app/coin.service.ts
https://medium.com/codingthesmartway-com-blog/building-an-angular-5-project-with-bootstrap-4-and-firebase-4504ff7717c1

https://medium.com/letsboot/the-perfect-mock-backend-to-start-with-an-angular-application-3d751d16614f (mock REST backend)
Sample CRUD
	https://appdividend.com/2018/01/21/angular-5-crud-tutorial-example-scratch/
	https://appdividend.com/2018/05/05/angular-6-tutorial-with-example-using-angular-cli/
	https://medium.com/@mail.bahurudeen/simple-crud-functionality-using-angular-5-with-bootstrap-4-f7baac0d2000
----------------------------- Angular CLI -------------------------------


-------------------------------------------------------------------------

#### Routing
	Configure Route
	add router out let
	Implement SPA
	Route and query parameter

#### Pipes
	to format data

#### Services & Dependency Injection
	

#### Directives i.e. outputing data to template 
	Structural Directives to change structre of DOM (add/ remove html tag form from DOM)
		ngFor, ngIf,   routerLInk
	Attribute directive to change attiribute of tag e.g. css , style
		ngClass, ngStyle, ngSwithch,		
	 Custum Directive 
#### Interpolation by {{ }}
	1- interpolation is a tool to output (display data) in template 

#### Component 	
	1- component controles portion of view on the browser e.g. sidebar , header , main content etc....
	1- The component is a TypeScript class that encapsulates the data for rendering in html template (just like controller)
	1- compnent is class which is associated with a specific view
	1- application has at least one component (root module or app module)
	1- all component will inside root/app component
	1- Component made of templete + class (type script) + metadata (information and decorator)
	1- decorator is a function above the class , tells that class is asociated with  decorator
	1- ng g c test  (g => generate , c=> component, test is name of component)
       
#### Module
	Angular application is collection of many individual modules
	every module is feature like user, admin etc 
	application has at least one module (root module or app module)
	each module is made of one or more component and services 


#### Notes
	
	 1- The main building blocks for Angular are modules, components, templates, metadata, data binding, directives,
	 services and dependency injection.
	 1- Angular was a complete rewrite of AngularJS.
	 1- Angular does not have a concept of “scope” or controllers instead, it uses a hierarchy of components as its main architectural concept.
	 1- Angular has a simpler expression syntax, focusing on “[ ]” for property binding, and “( )” for event binding

#### Create Project 

	ng new ProjectName
	cd ProjectName
	ng serve (to run localhost )

#### Install Angular
	npm install -g @angular/cli (latest version -g for globally)
	ng -v ( check version)

#### Install Node with NPM

