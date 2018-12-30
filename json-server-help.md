
### Get a full fake REST API with zero coding -----------
	JSON Server is an npm package that allows you to create an fake API
	https://github.com/typicode/json-server 



### 1- Install json-concat -----------
	To concat multiple json file into single json file
	1- cd mock-api-server
	2- npm init (to create package.json)
	2- mock-api-server $ npm install json-concat --save-dev (install package in current directory in devDependencies)
	3- save below code in concat-json.js
	var jsonConcat = require('json-concat');
	jsonConcat({
	    src: "data",
	    dest: "data.json",
	}, function(json){
	    console.log(json);
	});
	3- node concat-json.js ( run js file )
	All the .json files inside data folder will concat into data.json

### 2- Install json-server---------------
	 mock-api-server $ npm install -g json-server (install package globaly)

### Start JSON Server
	mock-api-server $ json-server --watch data.json

### finaly 
	mock-api-server $ node concat-json.js
	mock-api-server $ json-server --watch data.json
	check http://localhost:3000/
		

	

