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


router.param('pic', function(req, res, next, id) {
	var query = Pic.findById(id);
	query.exec(function (err, pic) {
		if(err) {return next(err);}
		if(!pic) {return next(new Error('cannot find pic'));}
		req.pic = pic;
		return next();
	});
});
router.get('/pics/:pic', function(req, res, next) {
	res.json(req.pic.url);
});
router.put('/pics/:pic/upvote', function(req, res, next) {
	req.pic.upvote(function(err, pic){
    if (err) { return next(err); }

    res.json(pic);
  });
});
router.put('/pics/:pic/downvote', function(req, res, next) {
	req.pic.downvote(function(err, pic){
    if (err) { return next(err); }

    res.json(pic);
  });
});
router.delete('/pics/:pic', function(req, res, next) {
	var victim = req.pic;
	victim.remove(function (err) {
		if(err) {return next(err);}
		res.json('');
	});
});


router.get('/upload', function(req, res, next) {
	res.render('upload');
});

router.post('/upload', function(req, res, next) {
router.post('/pics', function(req, res, next) {
	var pic = new Pic(req.body);
	pic.save(function(err, pic) {
		if(err) { return next(err); }
		res.json(pic);
	});
});
	res.redirect('/');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
