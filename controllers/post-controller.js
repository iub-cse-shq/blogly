// IMPORTING MODELS
// IMPORTING POST MODEL AND STORING IN VARIABLE POST





// Controller - Controller acts on both model and view. It controls the data flow into model object and updates the view whenever data changes. It keeps view and model separate.

var Post = require('./../models/post.js');


// MAKE FUNCTION TO RENDER VIEW
module.exports.new = function(request, response) {
  response.render('index.ejs');
}


// CREATING A NEW POST
module.exports.create = function(request, response) {
  var new_post = new post(request.body);
  new_post.save(function(err, data) {
    if (err)
      return response.status(400)
        .json({
          error: "Please add a title"
        });
    console.log(data);
    return response.status(200)
      .json({
        message: "Post successfully created"
      });

  })
  console.log(request.body);
}


// CONTROLLER TO GET ALL POSTS LIST
module.exports.list = function(request, response) {
Post.find(function(err, data){
  if(err){
    response.status(400)
      .json({
        error: "Database query error"
      });
  }

  response.status(200).json({
    posts: data
  });
});

}



// CONTROLLER TO GET SINGLE POST
module.exports.single = function(request, response) {

  Post.findOne({_id:request.params.articleID},
    function(err, data){
      if(err){
        response.status(400)
          .json({
            error: "Database query error"
          });
      }else{
      response.render('article.ejs', {
        post
        : data
      })
    }
  });

}