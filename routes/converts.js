'use strict';

var express = require('express');
var router = express.Router();
var marked = require('marked');

// var Todo = require('../models/convert');

// router.get('/', (req, res) => {
// 	Todo.find(function(todos) {
// 		res.send('get');
// 	});
// });

router.post('/', (req, res) => {
	var body = req.body.text;
	var markedUp = marked(body);
	res.send(markedUp);
});

module.exports = router;