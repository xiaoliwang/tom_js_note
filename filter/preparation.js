var parse = require('co-body');
var KeyGrip = require('keygrip');
var session = require('koa-session');

var errorStatus = require('./errorstatus.js');

module.exports = function (app){
	
	//设置签名
	app.keys = ['im a newer secret', 'i like turtle'];	//app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
	
	app.use(session(app));
	
	//获取post的数据
	app.use(function *(next){
		//this is the context(a object with request and response created per request)
		//this.path,this.method delegate to the request
		//this.length,this.type delegate to the response
		if('POST'===this.method){
			//this.query	//获取get的数据
			this.request.body = yield parse(this);	//获取post的数据
		}
		yield next;
		
		errorStatus(this);
	});
}
