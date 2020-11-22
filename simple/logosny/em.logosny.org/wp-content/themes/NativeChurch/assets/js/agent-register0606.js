/* ==================================================
	Register Form Ajax Call
================================================== */
jQuery(document).ready(function() {
	jQuery(".register-form").submit(function(event) {
		jQuery("#message").slideUp(750,function() {
		jQuery('#message').hide();
	
		jQuery('#submit')
		   .after('<img src="' + jQuery('#image_path').val() + 'assets/images/assets/ajax-loader.gif" class="loader" />')
		   .attr('disabled','disabled');
	
		jQuery.ajax({
			type: 'POST',
			url: agent_register.ajaxurl,
			data: {
				action: 'imic_agent_register',
				role: jQuery('#role').val(),
				username: jQuery('#username').val(),
				email: jQuery('#email').val(),
				pwd1: jQuery('#pwd1').val(),
				pwd2: jQuery('#pwd2').val(),
				task: jQuery('#task').val(),
				},
			success: function(data) {
				document.getElementById('message').innerHTML = data;
				jQuery('#message').slideDown('slow');
				jQuery('.register-form img.loader').fadeOut('slow',function(){jQuery(this).remove()});
				jQuery('#submit').removeAttr('disabled');
				if(data.match('successfully') != null) { document.getElementById('registerform').reset();
                                document.location.href = jQuery('.redirect_register').val(); }
			},
			error: function(errorThrown) {
			}
		});
		});
		return false;
	});
});