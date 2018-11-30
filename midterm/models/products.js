var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  name: String,
  cost: String,
  orders: {type: Number, default: 0},
  img: String,
});

CommentSchema.methods.order = function(cb) {
  this.orders += 1;
  this.save(cb);
};
mongoose.model('Pizza', CommentSchema);