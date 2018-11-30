var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Product = mongoose.model('Pizza');

router.get('/products', function(req, res, next) {
    Product.find(function(err, comments) {
        if (err) { return next(err); }
        res.json(comments);
    });
});

router.post('/products', function(req, res, next) {
    var comment = new Product(req.body);
    comment.save(function(err, comment) {
        if (err) { return next(err); }
        res.json(comment);
    });
});

router.param('product', function(req, res, next, id) {
    Product.findById(id, function(err, comment) {
        if (err) { return next(err); }
        if (!comment) { return next(new Error("can't find comment")); }
        req.comment = comment;
        return next();
    });
});

router.get('/products/:product', function(req, res) {
    res.json(req.comment);
});

router.put('/products/:product/order', function(req, res, next) {
    req.comment.order(function(err, comment) {
        if (err) { return next(err); }
        res.json(comment);
    });
});

router.delete('/products/:product', function(req, res) {
    console.log("in Delete");
    req.comment.remove();
    res.sendStatus(200);
});

module.exports = router;
