'use strict';

var express = require('express');
var router = express.Router();

var fs = require('fs');

router.get('/', function(req, res) {

	var colors = ['blue', 'red', 'green', 'burgandy'];
	var names = [
		{name: 'Jon', gender: 'm'},
		{name: 'Doe', gender: 'f'}
	]


	res.render('index', {
		title: 'Whoa, Handlebars!!!',
		timestamp: Date.now(),
		colors: colors,
		names: names
	});
})

module.exports = router;