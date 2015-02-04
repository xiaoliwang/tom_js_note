var mysql = 
{
	host: '192.168.1.10',
	port: 3306,
	db: 'app_tom_test',
	name: 'root',
	password: '123456789'
}

var redis = 
{
	host: '192.168.1.10',
	port: 6379,
	name: 'missevan_chat_password_tom',
	lifeCycle: 180
}

var mongodb = 
{
	host: '192.168.1.10',
	port: 27017,
	username: '',
	password: ''
}

exports.mysql = mysql;
exports.mongodb = mongodb;
exports.redis = redis;


//单元测试
var test = require('./database.js');
//console.log(test);