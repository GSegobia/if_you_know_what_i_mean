var User = require('./models/user');

module.exports = function(app){

	app.get('/api/users', function(req, res){

		User.find(function(err, users){

			if(err)
				res.send(err);

			res.json(users);
		});
	});

	app.post('/api/users', function(req, res){

		var user = new User();
		user.name = req.body.name;
		user.username = req.body.username;
		user.email = req.body.email;
		user.password = req.body.password;

		user.save(function(err){
		
			if(err)
				res.send(err);

			res.json({message: 'Usuário Criado'});
		});
	});

	app.get('/api/users/:user_id', function(req, res){

		User.findById(req.params.user_id, function(err, user){

			if(err)
				res.send(err);

			res.json(user);
		});
	});

	app.get('*', function(req, res){

		res.sendfile('./public/views/index.html');
	});
};