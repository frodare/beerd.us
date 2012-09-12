// Just a basic server setup for this site
var express = require('express');
var app = express();
var barley = require('barley');

app.use(express.compress());
app.use(barley(__dirname));
app.use(express['static'](__dirname + '/articles'));
app.use(express['static'](__dirname + '/skin/public'));

app.listen(9000);