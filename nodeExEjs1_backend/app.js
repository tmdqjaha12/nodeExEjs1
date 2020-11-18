// cors 미적용@

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// app.js에서 최초 실행 후 이 부분으로 넘어가는 것 같다.
// router var (express router 분리)
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
// == > 라우터 index로 
const RouterIndex = require('./routes/router_index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// router access (get대신)
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/', RouterIndex);

// 
app.listen(3100,()=>{
  console.log('Server Running On 3100 port')
})

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

// express router사용
module.exports = app;

