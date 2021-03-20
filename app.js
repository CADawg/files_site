var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fileUpload = require('express-fileupload');
var session = require('express-session');
require("dotenv").config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(session({secret: process.env.SESSION_SECRET, saveUninitialized: false, resave: true}))
app.use(fileUpload({
    createParentPath: true
}));
app.use(express.static(path.join(__dirname, 'frontend', 'build')));
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
