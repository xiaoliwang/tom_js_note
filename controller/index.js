var	mount = require('koa-mount'),
	sso = require('./sso'),
	chat = require('./chat');

module.exports = function(app){	
	app
		.use(mount('/sso',sso.middleware()))
		.use(mount('/chat',chat.middleware()));
};
