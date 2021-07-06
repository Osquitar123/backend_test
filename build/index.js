"use strict";

var express = require('express');

var morgan = require('morgan');

var app = express();

var _require = require('./scriptSavePlayer'),
    savePlayer = _require.savePlayer; //settings


app.set('port', process.env.PORT || 3000); //middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json()); //routes

app.use('/api/v1', require('./routes/players'));
savePlayer;
app.listen(app.get('port'), function () {
  return console.log("server on port ".concat(app.get('port')));
});