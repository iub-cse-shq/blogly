// https://blogly-scarletmclearn.c9users.io/about


var http = require('http');
// Using express to start the server and add routes
var bodyParser = require('body-parser');


// Import MongoDB:
var mongo = require('mongodb');
// Specifying port for C9
var db;                                                   // Database client if connection is successfull
var db_url = "mongodb://" + process.env.IP + ":27017";    //process.env specifies the port of the workspace(?)
// For local instance:
// var db_url = "mongodb://localhost:27017";

mongo.MongoClient.connect(db_url, {useNewUrlParser: true}, function(err, client){
  if(err){
    console.log('Could not connect to MongoDB');
  }else{
    db = client.db('node-cw9');
    
    console.log('Connected! We are going ham!');
  }
});


var mongoose = require('mongoose');

mongoose.connect(db_url);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db_2 = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db_2.on('error', console.error.bind(console, 'MongoDB connection error:'));
db_2.on('connected',  function(){console.log('Connected! We are going HAMMMM!')});




var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();



// added this before deleting below >
var cons = require('consolidate');

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


// app.cons('html', app.engine.pug);
app.set('view engine', 'pug');

app.set('view engine', 'ejs');


// Commented this > after adding those ^
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





// Configuring app for body-parser
app.use(bodyParser.json());
// Ensuring it uses encoded URLs
app.use(bodyParser.urlencoded({extended:true}));



// app.get('/testing-route', function(req, res){
//   res.send("Hello world!");
// });




require('./routes/index.js')(app);
server.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function(){
  console.log('Server running');
});


module.exports = app;




