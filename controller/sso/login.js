module.exports = function(sso){
	sso.get('/login',function *(next){
		this.body ='success/login';
	});
}