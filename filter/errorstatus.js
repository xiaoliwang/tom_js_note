/**   
* @Title: events
* @Package node/api
* 
* @author 操杰朋 
* @create 2015/2/4
* @version 0.0.1 
* 
* 
* @Description:
* 错误处理
* 
*/


module.exports = function (context){
	switch(context.status)
	{
	case 404:
		context.body = '没有找到该页面';
		context.status = 404;
		break;
	case 500:
		context.body = '内部错误';
		context.status = 500;
		break;
	}
}