require('babel-register');
const createError = require( 'http-errors');
const express = require( 'express');
const path = require( 'path');
const cookieParser = require( 'cookie-parser');
const logger = require( 'morgan');
const mongoose = require( 'mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const apiRouter = require( './routes/api');

var app = express();

// db stuff
mongoose.connect('mongodb://localhost/turbodb')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected!!')
});

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/client/build')));

app.use('/api', apiRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // send json of the error page
  res.status(err.status || 500);
  res.json({error: 'err'});
});




module.exports = app;
