--- express ----------------------------------------------------------------
	web framework for node.
	http://expressjs.com/en/starter/installing.html
	https://github.com/expressjs/express/wiki

	npm express install --save

	module.exports = function (message) {
		console.log(prefix + message);
	};

	exports.loudly = function (message) {
		console.log('PROCLAIMING: ' + message);
	};

--- ejs ---------------------------------------------------------------------
Embedded JavaScript templates
	http://ejs.co/#install
	https://www.npmjs.com/package/ejs
	
	
	npm install ejs --save

--- nodemon --------------------------------------------------------------------
For use during development of a node.js based application.
nodemon will watch the files in the directory in which nodemon was started, 
and if any files change, nodemon will automatically restart your node application.

	npm install -g nodemon

	nodemon app.js






