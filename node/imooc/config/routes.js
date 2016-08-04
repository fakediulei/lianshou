var Index=require('../app/controllers/index.js');
var User=require('../app/controllers/user.js');
var Movie=require('../app/controllers/movie.js');


module.exports=function(app){
	//pre handle user
	app.use(function(req,res,next){
		var _user=req.session.user;
		if(_user){
			app.locals.user=_user;
		}	
		return next();
	});
	//Index
	app.get('/',Index.index);
	
	//User 
	app.post('/user/signup',User.signup);
	app.post('/user/signin',User.signin);
	app.get('/logout',User.logout);
	app.get('/admin/userList',User.list);
	
	//Movie
	app.get('/movie:id',Movie.detail);
	app.get('/admin/new',Movie.new);
	app.get('/admin/update:id',Movie.update);
	app.post('/admin/movie',Movie.save);
	app.get('/admin/list',Movie.list);
	app.delete('/admin/list',Movie.del);
}
	

