'use strict'

var PORT = 4000;

// bring in dependencies
var fs = require('fs');
var express = require('express');
var marked = require('marked');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

// configure general middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
	var html = fs.readFileSync('./index.html').toString();
	res.send(html);
});

app.use('/converts', require('./routes/converts'));

// spin up server
app.listen(PORT, () => {
	console.log('Express server listening on port', PORT)
});