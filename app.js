var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var infoRouter = require('./routes/info');
var mainRouter = require('./routes/main');
var javelinRouter = require('./routes/javelin');
var friends_codeRouter = require('./routes/friends_code');
var trailerRouter = require('./routes/trailer');
var code_addRouter = require('./routes/code_add');
var code_readRouter = require('./routes/code_read');
var code_deleteRouter = require('./routes/code_delete');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/main', mainRouter);
app.use('/info', infoRouter);
app.use('/javelin', javelinRouter);
app.use('/friends_code', friends_codeRouter);
app.use('/trailer', trailerRouter);
app.use('/code_add', code_addRouter);
app.use('/code_read', code_readRouter);
app.use('/code_delete', code_deleteRouter);


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


module.exports = app;
