module.exports = function(sso){
	sso.get('/roomlist',function *(next){
		this.body ='sso/roomlist';
	});
}