var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	name: String,
	username: {type: String, unique: true},
	email: {type: String, unique: true},
	password: String
});

module.exports = mongoose.model('User', UserSchema);