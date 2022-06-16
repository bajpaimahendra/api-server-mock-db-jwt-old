
#### json-server-mock-api


	$ mkdir api-server-mock-db
	$ cd api-server-mock-db
	$ npm init --yes  ( to create package.json )

	$ npm install -g json-server          			 ( install package globaly )
	$ json-server -v  								 ( check version )
	$ json-server -h  								 ( help )

	$ npm install json-concat --save-dev   			 ( install package in current directory in devDependencies )

	save below code in concat-json.js

	var jsonConcat = require('json-concat');
	jsonConcat({
	    src: "data",
	    dest: "database.json",
	}, function(json){
	    console.log(json);
	});

	$ node concat-json.js 						( run js file , To concat multiple json file into single json file database.json )

	$ json-server --watch database.json.json
	$ json-server --watch data/database.json.json --port 3004   ( Alternative path and port )




### finaly 
	api-server-mock-db $ node concat-json.js
	api-server-mock-db $ json-server --watch data/DB.json
	check http://localhost:3000/	


### ######################################## Get a full fake REST API with zero coding -----------
	JSON Server is an npm package that allows you to create an fake API
	https://github.com/typicode/json-server 	

