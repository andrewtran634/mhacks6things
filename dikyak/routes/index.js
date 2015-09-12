var mongoose = require('mongoose');

var Pic = mongoose.model('Pic');
var Comment = mongoose.model('Comment');
var express = require('express');
var router = express.Router();

router.get('/pics', function(req, res, next) {
	Pic.find(function(err, pics) {
		if(err) {return next(err);}
		res.json(pics);
	});
});

router.post('/pics', function(req, res, next) {
	var pic = new Pic(req.body);
	pic.save(function(err, pic) {
		if(err) { return next(err); }
		res.json(pic);
	});
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
