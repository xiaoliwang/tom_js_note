var path = require('path');
var database = require('./database.js');
//设置根目录
var root_dir = path.resolve(__dirname, '..') + '/';	//__dirname为文件当前目录

var config = 
{
	web:
	{
		address: '127.0.0.1',
		port: 3000
	},
	app:
	{
		dev_mode: true
	},
	sys: 
	{
		root_dir: root_dir
	},
	db:
	{
		mysql: database.mysql,
		mongodb: database.mongodb,
		redis: database.redis
	}
}

module.exports = config;

//单元测试
var test = require('../conf');
//console.dir(test);