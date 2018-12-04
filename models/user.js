var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var User = module.exports = mongoose.model('User', userSchema);

//Get Users
module.exports.getUsers = function(callback, limit){
  User.find(callback).limit(limit);
}

//Get User By Id
module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

//Add User
module.exports.addUser = function(user, callback){
  User.create(user, callback);
}