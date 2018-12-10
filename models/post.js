var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var postSchema = new Schema({
    title:  String,
    author: String,
    body:   String,
    category: String,
    
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    },
    
    comments:[{type: Schema.Types.ObjectId, ref: 'comment'}],
  
  });
  
  
  var commentSchema = new Schema({
    comment_text : String, 
    date: Date,
    
      _post : {type: Schema.Types.ObjectId, ref: 'post'},
  });
  
  
  
  
  
  
  
  
Post = mongoose.model('post', postSchema);
Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;
module.exports = Post;