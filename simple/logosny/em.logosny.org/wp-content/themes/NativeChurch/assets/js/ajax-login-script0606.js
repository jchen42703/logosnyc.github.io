jQuery(document).ready(function($) {
    // Perform AJAX login on form submit
    $('form#login').on('submit', function(e){
        $('form#login p.status').show().html("<div id=\"messages\"><div class=\"alert alert-success\">"+ajax_login_object.loadingmessage+"</div></div>");
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_login_object.ajaxurl,
            data: { 
                'action': 'ajaxlogin', //calls wp_ajax_nopriv_ajaxlogin
                'username': $('form#login #loginname').val(), 
                'password': $('form#login #password').val(), 
				  'rememberme': $('form#login #rememberme').val(),
                'security': $('form#login #security').val() },
            success: function(data){
                $('form#login p.status').html("<div id=\"messages\"><div class=\"alert alert-error\">"+data.message+"</div></div>");
                if (data.loggedin == true){
					$('form#login p.status').html("<div id=\"messages\"><div class=\"alert alert-success\">"+data.message+"</div></div>");
					document.location.href = jQuery('.redirect_login').val();
                }
            }
        });
        e.preventDefault();
    });
});