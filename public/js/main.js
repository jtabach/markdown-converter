'use strict';

$(document).ready(function() {
	$('button').click(convertText);
});

function convertText() {
	 var input = $('.input').val();
	 $.post('./converts', {'text': input}, function(data) {
	 	var parsed = $.parseHTML(data);
	 	$('.output').html(parsed);
	 });
}