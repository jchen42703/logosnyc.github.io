(function($) {
  "use strict";
jQuery(document).ready(function(){
	$('#event_submit').on('submit', function(e) { 
		var title = $("#title").val();
		var content = $("#description").val();
		var address = $("#address").val();
		var date = $("#date").val();
		var end_date = $("#end_date").val();
		if(title=='')
		{
			$('#event_submit').find("#message").empty();
			$('#event_submit').find("#message").append("<div class=\"alert alert-error\">Please insert event title.</div>");
			e.preventDefault();
		}
		else if(content=='')
		{
			$('#event_submit').find("#message").empty();
			$('#event_submit').find("#message").append("<div class=\"alert alert-error\">Please insert event description.</div>");
			e.preventDefault();
		}
		else if(address=='')
		{
			$('#event_submit').find("#message").empty();
			$('#event_submit').find("#message").append("<div class=\"alert alert-error\">Please insert event address.</div>");
			e.preventDefault();
		}
		else if(date=='')
		{
			$('#event_submit').find("#message").empty();
			$('#event_submit').find("#message").append("<div class=\"alert alert-error\">Please insert event start date.</div>");
			e.preventDefault();
		}
		else if(end_date=='')
		{
			$('#event_submit').find("#message").empty();
			$('#event_submit').find("#message").append("<div class=\"alert alert-error\">Please insert event end date.</div>");
			e.preventDefault();
		}
		else
		{ 
			$('#event_submit').find("#message").empty();
			$.ajax({
			type: 'POST',
			url: events.ajaxurl,
			async:false,
			data: {
				action: 'imic_add_event',
				captcha_q: $('#captcha').text(),
				captcha_a: $('#captcha_val').val()
				},
			success: function(data) {
				if(data=='')
				{
					
				}
				else
				{
					$('#event_submit').find("#message").empty();
					$('#event_submit').find("#message").append("<div class=\"alert alert-error\">"+data+"</div>");
					e.preventDefault();
				}
			},
			error: function(errorThrown) {
			}
		});
			
		}
	});
});
})(jQuery);