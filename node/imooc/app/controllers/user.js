var User=require('../models/user');
//signup
exports.sinup=function(req,res){
		var _user=req.body.user;
		User.findOne({name:_user.name},function(err,user){
			if(err) console.log(err);
			if(user){
				return res.redirect('/');
			}
			else{
				var user=new User(_user);
				user.save(function(err,user){
					if(err){console.log(err);}
					res.redirect('/admin/userlist');
				});			
			}
		});	
}

	
	//singnin
exports.signin=function(req,res){
		var _user=req.body.user;
		var name=_user.name;
		var password=_user.password;
		User.findOne({name:name},function(err,user){
			if(err){console.log(err);}
			if(!user){return res.redirect('/');}
			user.comparePassword(password,function(err,isMatched){
				if(err){console.log(err);}
				if(isMatched){
					console.log('signin success!');
					req.session.user=user;
					return res.redirect('/');
				}
				else{
					console.log('Password incorrect');
				}
			});
		});	
}

	//logout
exports.logout=function(req,res){
		delete req.session.user;
		/*delete app.locals.user;*/
		res.redirect('/');
}
	//userList page	
exports.list=function(req,res){
		User.fetch(function(err,users){
			if(err){console.log(err);}
			res.render('userlist',{
				title:'imooc 用户列表页',
				users:users
			});
		});
}
	
