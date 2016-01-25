'use strict';

var express = require('express');
var router = express.Router();

var fs = require('fs');

router.get('/', function(req, res) {

	var colors = ['blue', 'red', 'green'];


	res.render('index', {
		title: 'Whoa, Handlebars!!!',
		timestamp: Date.now(),
		colors: colors
	});
})

module.exports = router;