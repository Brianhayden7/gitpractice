var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/owl', function(req, res, next) {
    var url = "https://owlbot.info/api/v1/dictionary/";
    console.log("query ", req.query);
    url += req.query['q'];
    url += "?format=json";
    request(url).pipe(res);
})

module.exports = router;
