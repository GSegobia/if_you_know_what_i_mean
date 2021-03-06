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
		user.name = req.body.nome;
		user.username = req.body.usuario;
		user.email = req.body.email;
		user.password = req.body.senha;

		user.save(function(err){
		
			if(err)
				res.send(err);

			res.redirect('/');
			//res.json({message: 'Usuário Criado'});
		});
	});

	app.get('/api/users/:user_id', function(req, res){

		User.findById(req.params.user_id, function(err, user){

			if(err)
				res.send(err);

			res.json(user);
		});
	});

	app.put('/api/users/:user_id', function(req, res){

		User.findById(req.params.user_id, function(err, user){

			if(err)
				res.send(err);

			user.name = req.body.name;
			user.username = req.body.username;
			user.email = req.body.email;
			user.password = req.body.password;

			user.save(function(err){
				if(err)
					res.send(err);

				res.json({message: 'Usuário Atualizado'});
			});
		});
	});

	app.delete('/api/users/:user_id', function(req, res){

		User.remove({_id: req.params.user_id}, function(err, user){

			if(err)
				res.send(err);

			res.json({message: 'Usuário deletado com sucesso!'})
		});
	});

	app.get('*', function(req, res){

		res.sendfile('./public/views/index.html');
	});

};