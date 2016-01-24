'use strict';

$(document).ready(function() {
	$('textarea').keyup(function() {
		if (this.timeoutId)
			window.clearTimeout(this.timeoutId);
		this.timeoutId = window.setTimeout(function () {
			var input = $('.input').val();
			$.post('./converts', {'text': input}, function(data) {
				var parsed = $.parseHTML(data);
				$('.output').html(parsed);
			});
		}, 100);
	});
});