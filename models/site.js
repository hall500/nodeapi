var mongoose = require('mongoose');

//Site Schema
var siteSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Site = module.exports = mongoose.model('Site', siteSchema);

//Get Sites
module.exports.getSites = function(callback, limit){
  Site.find(callback).limit(limit);
}

//Get Site By Id
module.exports.getSiteById = function(id, callback){
  Site.findById(id, callback);
}

//Add Site
module.exports.addSite = function(site, callback){
  Site.create(site, callback);
}