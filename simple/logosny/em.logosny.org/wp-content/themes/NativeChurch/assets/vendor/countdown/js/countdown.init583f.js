jQuery(function($){
	"use strict";
	jQuery(document).ready(function($) {
		/* Timer */
		var target = $('#counter').data('date');
		var finished = false,
		availiableExamples = {
			set15daysFromNow: 15 * 24 * 60 * 60 * 1000,
			set5minFromNow: 5 * 60 * 1000,
			set1minFromNow: 1 * 60 * 1000
		};
		function callback(event) {
			var $this = $(this);
			switch (event.type) {
				case "seconds":
				case "minutes":
				case "hours":
				case "days":
				case "weeks":
				case "daysLeft":
					$this.find('div span#' + event.type).html(event.value);
					if (finished) {
						$this.fadeTo(0, 1);
						finished = false;
					}
					break;
				case "finished":
					$this.fadeTo('slow', '.5');
					finished = true;
					break;
			}
		}
		$('#counter').countdown(target, callback);
	});
});