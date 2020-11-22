jQuery(document).ready(function() {
	
	var d = new Date();

    var n = d.getMonth()+1;

    var y = d.getFullYear();
	var this_month = y+'-'+n;
	//alert(n);
    jQuery('.calendar').prepend('<div id="loading-image"><img id="loading-image-img" style="width:52px; height:52px;" src="' + calenderEvents.homeurl + '/assets/images/loader-new.gif" alt="Loading..." /></div>');
	if (calenderEvents.google_target == 1) {
		gtarget = 'google';
	} else {
		gtarget = 'yahoo';
	}
	if (calenderEvents.calheadview == 1) {
		HeadLeft = "title";
		HeadCenter = "";
		HeadRight = "prev,next today";
	} else if (calenderEvents.calheadview == 2) {
		HeadLeft = "prev,next today";
		HeadCenter = "title";
		HeadRight = "month,agendaWeek,agendaDay";
	} 
	Limit = parseInt(calenderEvents.eventLimit);
	
	
    jQuery('.calendar').fullCalendar({
		eventAfterRender: function (event, element) {
			element.find('.fc-title').html(event.title);
		},
		eventRender: function(event, element)
		{ 
    		element.find('.fc-title').html(event.title);
		},
		viewRender: function (view, element) {
			var b = jQuery('.calendar').fullCalendar('getDate');
			this_month = b.format('YYYY-MM');
			//alert(this_month);
			jQuery('.calendar').fullCalendar('removeEventSource', calenderEvents.homeurl + '/framework/json-feed.php'); 
			jQuery('.calendar').fullCalendar('refetchEvents');
			jQuery('.calendar').fullCalendar('addEventSource', { url: calenderEvents.homeurl + '/framework/json-feed.php',
							type: 'POST',
							data: {
							   event_cat_id: jQuery('.event_calendar').attr('id'),
							   month_event: this_month,
							  }})
			jQuery('.calendar').fullCalendar('refetchEvents');
		},
        monthNames: calenderEvents.monthNames,
        monthNamesShort: calenderEvents.monthNamesShort,
        dayNames: calenderEvents.dayNames,
        dayNamesShort: calenderEvents.dayNamesShort,
        editable: false,
		header: {left: HeadLeft,
				center: HeadCenter,
				right:  HeadRight
				},
		buttonText: {
			today: calenderEvents.today,
			month: calenderEvents.month,
			week: calenderEvents.week,
			day: calenderEvents.day
		},
		eventLimit: Limit, // for all non-agenda views
		defaultView: calenderEvents.view,
        googleCalendarApiKey: calenderEvents.googlekey,
		eventSources: [
			{
				googleCalendarId:calenderEvents.googlecalid1

			},
			{
				googleCalendarId:calenderEvents.googlecalid2

			},
			{
				googleCalendarId:calenderEvents.googlecalid,
			}
		],
		
		eventClick: function(event) {
			if (event.url.indexOf(gtarget) > -1) {
			   // opens events in a popup window
			   window.open(event.url, 'gcalevent', 'width=700,height=600');
			   return false;
			}
		},
        timeFormat: calenderEvents.time_format,
        firstDay:calenderEvents.start_of_week,
        loading: function(bool) {
            if (bool)
                jQuery('#loading-image').show();
            else
                jQuery('#loading-image').hide();
        },
    });
	
	jQuery(".calender_filter").click(function(){
	var term_id = jQuery(this).val();
	jQuery(".fc-view-container,.fc-toolbar").hide();
	reloadCal(term_id);
});
function reloadCal(event_term) {
	
	var source = {
		googleCalendarApiKey: calenderEvents.googlekey,
		googleCalendarId: calenderEvents.googlecalid
	};
	if((event_term!="google")&&(event_term!="")) {
	jQuery('.calendar').fullCalendar('removeEventSource',source.googleCalendarId); }
	else {
		jQuery('.calendar').fullCalendar('removeEventSource',source.googleCalendarId);
		jQuery('.calendar').fullCalendar('addEventSource', source);	
	}
	jQuery('.calendar').fullCalendar('removeEventSource', calenderEvents.homeurl + '/framework/json-feed.php'); 
	jQuery('.calendar').fullCalendar('refetchEvents');
	var b = jQuery('.calendar').fullCalendar('getDate');
    this_month = b.format('YYYY-MM');
    jQuery('.calendar').fullCalendar('addEventSource', { 
	url: calenderEvents.homeurl + '/framework/json-feed.php',
					type: 'POST',
					data: {
					   event_cat_id: event_term,
					   month_event: this_month,
					  },
					  loading: function(bool) {
						if (bool)
							jQuery('#loading-image').show();
						else
							jQuery('#loading-image').hide();
					},})
    jQuery('.calendar').fullCalendar('refetchEvents');
	jQuery(".fc-view-container,.fc-toolbar").show();
}
});

