// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called

var userSchema = new mongoose.Schema({
		nome: {type: String},
		email: {type: String, unique: true},
		senha: {type: String}
	});

// Mongoose Model
var Users = mongoose.model('Usuarios', userSchema);

module.exports = Users;