var Router = require('koa-router');

var chat = new Router();
require('./roomlist')(chat);

module.exports = chat;
