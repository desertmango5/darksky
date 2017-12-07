const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const routes = require('./routes/index');
const helpers = require('./helpers');
const errorHandlers = require('./handlers/errorHandlers');

const app = express();

// set Pug as view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// make raw data available on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// populate req.cookies
app.use(cookieParser());

// data validation methods
app.use(expressValidator());

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
}));

// pass variables to templates from helpers.js
app.use((req, res, next) => {
  res.locals.h = helpers;
  res.locals.user = req.user || null;
  res.locals.currentPath = req.path;
  next();
});

// handle routes
app.use('/', routes);

// MIDDLEWARE ERROR HANDLERS

// 404 user is routes don't work
app.use(errorHandlers.notFound);

// development error display
if (app.get('env') === 'development') {
  app.use(errorHandlers.developmentErrors);
}

// export module to server at start.js
module.exports = app;
