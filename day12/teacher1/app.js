var createError = require('http-errors');
var express = require('express');
var path = require('path');//路径
var cookieParser = require('cookie-parser');//cookie
var logger = require('morgan');//日志

var indexRouter = require('./routes/index');//自定义路由
var usersRouter = require('./routes/users');

var app = express();//启动express框架

// view engine setup
app.set('views', path.join(__dirname, 'views'));//设置页面地址
app.set('view engine', 'ejs');//设置页面的引擎.ejs  渲染的规则

app.use(logger('dev'));//use使用
app.use(express.json());
app.use(express.urlencoded({ extended: false }));//
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//静态资源的部署

app.use('/', indexRouter);//路由规则
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

module.exports = app;
