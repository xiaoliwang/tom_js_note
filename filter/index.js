var preparation = require('./preparation.js');


module.exports = function (app){
	
	app.proxy = true;	//设置相信代理,即相信X-Forwarded-For
	
	//设置response头文件
	app.use(function *(next){
		var start = new Date;
		//请求时间
		this.request.REQUEST_TIME = start;
		yield next;
		var ms = new Date - start;
		this.set('X-Powered-By', 'TomCao');
		//设置请求执行时间
		this.set('X-Response-Time', ms + 'ms');
	});
	
	//准备需要的数据和处理状态
	preparation(app);
	
}