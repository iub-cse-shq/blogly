
// IMPORTING MODULES
var express = require('express');

// TO GO TO LINKS
var router = express.Router();


// DEFINING HTTP REQUEST, RESPONSE

// USER MAKES A REQUEST TO LOCALHOST/ AND A CALLBACK FUNCTION IS CALLED
// CALLBACK FUNTION TAKES REQUEST,

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.pug', { title: 'Express Site' });
});





// Eikhane amar routes gulo disi UwU //////////

router.get('/testing-route', function(req, res){
//   res.send("Hello world!");

    // res.render('about.html' );
    
    res.render('contact' );
});



router.get('/home', function(req, res){
  res.render('home.ejs', {
    title: 'Home'
  });
});

router.get('/about', function(req, res){
  res.render('about', {
    title: 'About Page'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});


router.get('/category', function(req, res){
  
   var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    
    
  res.render('category', {
    title: 'Category'
  });
});




router.get('/audio', function(req, res){
  res.render('single-audio', {
    title: 'Audio'
  });
});





module.exports = function(app) {

  var article = require('./../controllers/post-controllers.js');

  app.get('/new-post', post.new);

  app.post('/post/create', post.create);

  app.get('/post/list', post.list);
  
  app.get('/post/:postID', post.single);

}


router.get('/gallery', function(req, res){
  res.render('single-gallery', {
    title: 'Gallery'
  });
});



router.get('/standard', function(req, res){
  res.render('single-standard', {
    title: 'Standard'
  });
});





router.get('/video', function(req, res){
  res.render('single-video', {
    title: 'Video'
  });
});



router.get('/guide', function(req, res){
  res.render('style-guide', {
    title: 'Style Guide'
  });
});
// /////////////////////////////

module.exports = router;
