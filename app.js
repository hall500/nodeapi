var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


app.use(bodyParser.json());

User = require('./models/user');
Site = require('./models/site');

//Connect to mongoose 
mongoose.connect('mongodb://localhost/inventoryapi', { useNewUrlParser: true });
var db = mongoose.connection;

//Home URL
app.get('/', function(req, res){
  res.send('Please use /api/users or /api/sites or api/backups ');
});

app.get('/api/users', function(req, res){
  User.getUsers(function(err, users){
    if(err){
      throw err;
    }
    res.json(users);
  });
});

app.get('/api/sites', function(req, res){
  Site.getSites(function(err, sites){
    if(err){
      throw err;
    }
    res.json(sites);
  });
});

app.get('/api/sites/:_id', function(req, res){
  Site.getSiteById(req.params._id, function(err, sites){
    if(err){
      throw err;
    }
    res.json(sites);
  });
});

app.get('/api/users/:_id', function(req, res){
  User.getUserById(req.params._id, function(err, users){
    if(err){
      throw err;
    }
    res.json(users);
  });
});


app.post('/api/users', function(req, res){
  var user = req.body;
  User.addUser(user, function(err, user){
    if(err){
      throw err;
    }
    res.json(user);
  });
});

app.post('/api/sites', function(req, res){
  var site = req.body;
  Site.addSite(site, function(err, site){
    if(err){
      throw err;
    }
    res.json(site);
  });
});

app.listen(3000);

console.log('Server running on port 3000 ...');