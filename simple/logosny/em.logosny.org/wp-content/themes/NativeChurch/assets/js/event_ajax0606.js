jQuery(document).ready(function() {
    jQuery("#ajax_events").on("click", "a.upcomingEvents", function(event) {
		jQuery('body').find('.listing-cont').html('<div id="loading-image"><img id="loading-image-img" style="width:52px; height:52px;" src="' + urlajax.homeurl + '/assets/images/loader-new.gif" alt="Loading..." /></div>');
       var dateEvent = jQuery(this).attr('id');
		var termEvent = jQuery(this).attr('rel');
        jQuery.ajax({
            type: 'POST',
            url: urlajax.ajaxurl,
            data: {
                action: 'imic_event_grid',
                date: dateEvent,
				term: termEvent,
            },
            success: function(data) {
                jQuery('.listing-cont').fadeIn('slow');
                jQuery('#ajax_events').html('');
                jQuery('#ajax_events').append(data);
            },
            error: function(errorThrown) {
            }
        });
    });
 });