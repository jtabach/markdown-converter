'use strict'

const PORT = 4000;

// bring in dependencies
var fs = require('fs');
var express = require('express');
var marked = require('marked');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'hbs');

// configure general middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

// app.get('/', (req, res) => {
// 	var html = fs.readFileSync('./index.html').toString();
// 	res.send(html);
// });

app.use('/', require('./routes/index'));
app.use('/converts', require('./routes/converts'));

// spin up server
app.listen(PORT, () => {
	console.log('Express server listening on port', PORT)
});