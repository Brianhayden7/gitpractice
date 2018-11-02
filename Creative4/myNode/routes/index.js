var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/geo', function(req, res, next) {
    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    console.log("query ", req.query);
    url += req.query['q'];
    url += "&key=AIzaSyBYWFUj6ZsKrEK7gflhdNppR2it9zXp4W0";
    request(url).pipe(res);
});


module.exports = router;
