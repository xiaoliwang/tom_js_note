var app = require('koa')();
var config = require('../conf');
var filter = require('../filter');
var controller = require('../controller');

filter(app);
controller(app);

var server = app.listen(
		process.env.PORT || config.web.port || 3000,
		config.web.address || '::',
		function(){
			console.log('MissEvan SSO Server listen on ' +
						 server.address().address + ':' + 
						 server.address().port);
		}
);
