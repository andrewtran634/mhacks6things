var mongoose = require('mongoose');

PicSchema = new mongoose.Schema({
	url: String,
	likes: {type: Number, default: 0},
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
	numComments: {type: Number, default: 0},
	timestamp: {type: Date, default: Date.now},
});

PicSchema.methods.upvote = function(cb) {
  this.likes += 1;
  this.save(cb);
}; 
mongoose.model('Pic', PicSchema);