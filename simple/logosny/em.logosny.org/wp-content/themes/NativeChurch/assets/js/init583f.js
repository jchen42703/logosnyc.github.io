jQuery(function($){
	"use strict";
    var NATIVE = window.NATIVE || {};
    NATIVE.megaMenu = function() {
        jQuery('.megamenu-sub-title').closest('ul.sub-menu').wrapInner('<div class="row" />').wrapInner('<div class ="megamenu-container container" />').wrapInner('<li />');
        jQuery('.megamenu-container').closest('li.menu-item-has-children').addClass('megamenu');
        var $class = '';
		jQuery(".megamenu-container").each(function(index, elem) {
    		var numImages = $(this).find('.row').children().length;
			switch (numImages)
        	{
            case 1:
                $class = 12;
                break;
            case 2:
                $class = 6;
                break;
            case 3:
                $class = 4;
                break;
            case 4:
                $class = 3;
                break;
            default:
                $class = 2;
        	}
			$(this).find('.row').find('.col-md-3').each(function() {
            	jQuery(this).removeClass('col-md-3').addClass('col-md-' + $class);
        	});
		});
    };
   /* ==================================================
     Contact Form Validations
     ================================================== */
    NATIVE.ContactForm = function() {
        $('.contact-form-native').each(function() {
            var formInstance = $(this);
            formInstance.submit(function() {
                var action = $(this).attr('action');
                $("#message").slideUp(750, function() {
                    $('#message').hide();
                    $('#submit')
                            .after('<img src="' + $('#image_path').val() + '/assets/images/assets/ajax-loader.gif" class="loader" />')
                            .attr('disabled', 'disabled');
                    $.post(action, {
                        name: $('#name').val(),
                        email: $('#email').val(),
                        phone: $('#phone').val(),
                        comments: $('#comments').val(),
                        subject: $('#subject').val(),
                        admin_email: $('#admin_email').val(),
                    },
                            function(data) {
                                document.getElementById('message').innerHTML = data;
                                $('#message').slideDown('slow');
                                $('.contact-form-native img.loader').fadeOut('slow', function() {
                                    $(this).remove();
                                });
                                $('#submit').removeAttr('disabled');
                                if (data.match('success') !== null){
                                    $('.contact-form-native').slideUp('slow');
								}
                            }
                    );
                });
                return false;
            });
        });
    };
    /* ==================================================
     Responsive Nav Menu
     ================================================== */
	NATIVE.navMenu = function() {
		// Responsive Menu Events
		$( ".top-navigation" ).clone().appendTo( "#top-nav-clone" );
		$(".menu-toggle").click(function(){
			$(this).toggleClass("opened");
			$(".main-menu-wrapper").slideToggle(500);
			$(".header-style4 #top-nav-clone").slideToggle(500);
			return false;
		});
		$(window).resize(function(){
			if($(".menu-toggle").hasClass("opened")){
				$(".main-menu-wrapper").css("display","block");
				$(".header-style4 #top-nav-clone").css("display","block");
			} else {
				$(".menu-toggle").css("display","none");
			}
		});
		$('.enabled-top-mobile .top-navigation').tinyNav({
			header: '---',
			indent: '→'
		});
	};
	/* ==================================================
     User Login Register
     ================================================== */
	NATIVE.userlogin = function() {
		// User Login/Register
		$("#login-register").click(function(e){
			$("#login-user-form").show();
			$("#register-user-form").hide();
			e.preventDefault();
		});
		$("#login-user").click(function(e){
				$("#login-user-form").show();
				$("#register-user-form").hide();
			e.preventDefault();
		});
		$("#register-user").click(function(e){
			$("#login-user-form").hide();
			$("#register-user-form").show();
		e.preventDefault();
		});
	};
    /* ==================================================
     Scroll to Top
     ================================================== */
	NATIVE.scrollToTop = function(){
		var windowWidth = $(window).width(),
			didScroll = false;

		var $arrow = $('#back-to-top');

		$arrow.click(function(e) {
			$('body,html').animate({ scrollTop: "0" }, 750, 'easeOutExpo' );
			e.preventDefault();
		});

		$(window).scroll(function() {
			didScroll = true;
		});

		setInterval(function() {
			if( didScroll ) {
				didScroll = false;

				if( $(window).scrollTop() > 200 ) {
					$arrow.fadeIn();
				} else {
					$arrow.fadeOut();
				}
			}
		}, 250);
	};
    /* ==================================================
     Accordion
     ================================================== */
    NATIVE.accordion = function() {
        var accordion_trigger = $('.accordion-heading.accordionize');
        accordion_trigger.delegate('.accordion-toggle', 'click', function(event) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).addClass('inactive');
            }
            else {
                accordion_trigger.find('.active').addClass('inactive');
                accordion_trigger.find('.active').removeClass('active');
                $(this).removeClass('inactive');
                $(this).addClass('active');
            }
            event.preventDefault();
        });
    };
    /* ==================================================
     Toggle
     ================================================== */
    NATIVE.toggle = function() {
        var accordion_trigger_toggle = $('.accordion-heading.togglize');
        accordion_trigger_toggle.delegate('.accordion-toggle', 'click', function(event) {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).addClass('inactive');
            }
            else {
                $(this).removeClass('inactive');
                $(this).addClass('active');
            }
            event.preventDefault();
        });
    };
    /* ==================================================
     Tooltip
     ================================================== */
    NATIVE.toolTip = function() {
        $('a[data-toggle=tooltip]').tooltip();
    };
    /* ==================================================
     Tooltip Live
     ================================================== */
    NATIVE.toolTipLive = function() {
        $('a[data-toggle=tooltip-live]').tooltip();
    };
    /* ==================================================
     Twitter Widget
     ================================================== */
    NATIVE.TwitterWidget = function() {
        $('.twitter-widget').each(function() {
            var twitterInstance = $(this);
            twitterTweets = twitterInstance.attr("data-tweets-count") ? twitterInstance.attr("data-tweets-count") : "1";
            twitterInstance.twittie({
                dateFormat: '%b. %d, %Y',
                template: '<li><i class="fa fa-twitter"></i> {{tweet}} <span class="date">{{date}}</span></li>',
                count: twitterTweets,
                hideReplies: true
            });
        });
    };
    /* ==================================================
     Flex Slider
     ================================================== */
    NATIVE.FlexSlider = function() {
        $('.flexslider').each(function() {
            var carouselInstance = $(this);
            	var carouselAutoplay = carouselInstance.attr("data-autoplay") === 'yes' ? true : false;
               	var carouselPagination = carouselInstance.attr("data-pagination") === 'yes' ? true : false;
           		var carouselArrows = carouselInstance.attr("data-arrows") === 'yes' ? true : false;
               	var carouselDirection = carouselInstance.attr("data-direction") ? carouselInstance.attr("data-direction") : "horizontal";
              	var carouselStyle = carouselInstance.attr("data-style") ? carouselInstance.attr("data-style") : "fade";
             	var carouselSpeed = carouselInstance.attr("data-speed") ? carouselInstance.attr("data-speed") : "5000";
              	var carouselPause = carouselInstance.attr("data-pause") === 'yes' ? true : false;
               	carouselInstance.flexslider({
                animation: carouselStyle,
                easing: "swing",
                direction: carouselDirection,
                slideshow: carouselAutoplay,
                slideshowSpeed: carouselSpeed,
                animationSpeed: 600,
                initDelay: 0,
                randomize: false,
                pauseOnHover: carouselPause,
                controlNav: carouselPagination,
                directionNav: carouselArrows,
                prevText: "",
                nextText: "",
				smoothHeight: false,
				start: function(slider) {
				  var slide_count = slider.count - 1;
				  $(slider)
					.find('img.lazy:eq(0)')
					.each(function() {
					  var src = $(this).attr('data-src');
					  $(this).attr('src', src).removeAttr('data-src');
					});
				},
				before: function(slider) {
				  var slides     = slider.slides,
					  index      = slider.animatingTo,
					  $slide     = $(slides[index]),
					  $img       = $slide.find('img[data-src]'),
					  current    = index,
					  nxt_slide  = current + 1,
					  prev_slide = current - 1;
			
				  $slide
					.parent()
					.find('img.lazy:eq(' + current + '), img.lazy:eq(' + prev_slide + '), img.lazy:eq(' + nxt_slide + ')')
					.each(function() {
					  var src = $(this).attr('data-src');
					  $(this).attr('src', src).removeAttr('data-src');
					});
				}
            });
        });
    };
    /* ==================================================
     PrettyPhoto
     ================================================== */
    NATIVE.PrettyPhoto = function() {
        $("a[data-rel^='prettyPhoto']").prettyPhoto({
            opacity: 0.5,
            social_tools: "",
            deeplinking: false
        });
		jQuery('.sort-source a').click(function(){
			var sortval = jQuery(this).parent().attr('data-option-value');
			$(".sort-destination li a").removeAttr('data-rel');
    		$(".sort-destination li a").attr('data-rel', "prettyPhoto["+sortval+"]");
		});
    };
    /* ==================================================
     Animated Counters
     ================================================== */
    NATIVE.Counters = function() {
      	$('.counters').each(function () {
			$(".timer .count").appear(function() {
			var counter = $(this).html();
			$(this).countTo({
				from: 0,
				to: counter,
				speed: 2000,
				refreshInterval: 60,
				});
			});
		});
		
		$(".countdown .timer .count").appear(function() {
			var counter = $(this).html();
			$(this).countTo({
				from: 0,
				to: counter,
				speed: 2000,
				refreshInterval: 60,
			});
		});
	};
    /* ==================================================
     SuperFish menu
     ================================================== */
    NATIVE.SuperFish = function() {
        $('.sf-menu').superfish({
            delay: 200,
            animation: {opacity: 'show', height: 'show'},
            speed: 'fast',
            cssArrows: false,
            disableHI: true
        });
        $(".navigation > ul > li:has(ul)").find("a:first").append(" <i class='fa fa-angle-down'></i>");
        $(".navigation > ul > li > ul > li:has(ul)").find("a:first").append(" <i class='fa fa-angle-right'></i>");
        $(".navigation > ul > li > ul > li > ul > li:has(ul)").find("a:first").append(" <i class='fa fa-angle-right'></i>");
        $(".top-navigation > li:has(ul)").find("a:first").append(" <i class='fa fa-angle-down'></i>");
        $(".top-navigation > li > ul > li:has(ul)").find("a:first").append(" <i class='fa fa-angle-right'></i>");
        $(".top-navigation > li > ul > li > ul > li:has(ul)").find("a:first").append(" <i class='fa fa-angle-right'></i>");
    };
    /* ==================================================
     IsoTope Portfolio
     ================================================== */
    NATIVE.IsoTope = function() {
        $("ul.sort-source").each(function() {
			var isoInstance = $(this); 
			var isoLayout = isoInstance.attr("data-layout") ? isoInstance.attr("data-layout") : "sloppyMasonry";
            var source = $(this);
            var destination = $("ul.sort-destination[data-sort-id=" + $(this).attr("data-sort-id") + "]");
            if (destination.get(0)) {
                $(window).load(function() {
                    destination.isotope({
                        itemSelector: ".grid-item",
                        layoutMode: isoLayout
                    });
                    source.find("a").click(function(e) {
                        e.preventDefault();
                        var $this = $(this),
                                filter = $this.parent().attr("data-option-value");
                        source.find("li.active").removeClass("active");
                        $this.parent().addClass("active");
                        destination.isotope({
                            filter: filter
                        });
                        if (window.location.hash !== "" || filter.replace(".", "") !== "*") {
                            self.location = "#" + filter.replace(".", "");
                        }
                        return false;
                    });
                    $(window).bind("hashchange", function(e) {
                        var hashFilter = "." + location.hash.replace("#", ""),
                                hash = (hashFilter === "." || hashFilter === ".*" ? "*" : hashFilter);
                        source.find("li.active").removeClass("active");
                        source.find("li[data-option-value='" + hash + "']").addClass("active");
                        destination.isotope({
                            filter: hash
                        });
                    });
                    var hashFilter = "." + (location.hash.replace("#", "") || "*");
                    var initFilterEl = source.find("li[data-option-value='" + hashFilter + "'] a");
                    if (initFilterEl.get(0)) {
                        source.find("li[data-option-value='" + hashFilter + "'] a").click();
                    } else {
                        source.find("li:first-child a").click();
                    }
                });
            }
        });
        $(window).load(function() {
            var IsoTopeCont = $(".isotope-grid");
            IsoTopeCont.isotope({
                itemSelector: ".grid-item",
                layoutMode: 'sloppyMasonry'
            });
            if ($(".grid-holder").length > 0) {
                var $container_blog = $('.grid-holder');
				var isoLayout = $container_blog.attr("data-layout") ? $container_blog.attr("data-layout") : "sloppyMasonry";
                $container_blog.isotope({
                    itemSelector: '.grid-item',
					layoutMode: isoLayout
                });
                $(window).resize(function() {
                    var $container_blog = $('.grid-holder');
				var isoLayout = $container_blog.attr("data-layout") ? $container_blog.attr("data-layout") : "sloppyMasonry";
                    $container_blog.isotope({
                        itemSelector: '.grid-item',
						layoutMode: isoLayout
                    });
                });
            }
        });
    };
    /* ==================================================
     Init Functions
     ================================================== */
    $(document).ready(function() {
        NATIVE.ContactForm();
        NATIVE.megaMenu();
        NATIVE.scrollToTop();
        NATIVE.accordion();
        NATIVE.toggle();
        NATIVE.toolTip();
		NATIVE.toolTipLive();
        NATIVE.navMenu();
        NATIVE.TwitterWidget();
        NATIVE.FlexSlider();
        NATIVE.SuperFish();
        NATIVE.Counters();
        NATIVE.IsoTope();
		$("#additional-media-sermons").find(".tab-content").find('.tab-pane:first-child').addClass('active');
		$("#additional-media-sermons").find(".nav-tabs").find('li:first-child').addClass('active');
		
		//Code for sermon filters Start
		var start_search = "1";
		$('.sermon-filter-search').on('submit', function(){
			$('.nativechurch_sermon_filters').each(function(){
                var selected_val = $("option:selected", this);
				if($(selected_val).val()!=='')
				{
					start_search = "";
				}
			});
			if(start_search==="1")
			{
				return false;
			}
		});
		$('.nativechurch_sermon_filters').change(function(){
            $('.terms-search').show();
			var selected = $("option:selected", this);
			var filter_id = $(this).attr('id');
			var posts = JSON.parse($(selected).attr('data-objects'));
			$('.nativechurch_sermon_filters').each(function(){
				var next_filter_id = $(this).attr('id');
				if(filter_id===next_filter_id){ return true; }
				$("#"+next_filter_id+" > option").each(function() {
					$(this).show();
					if($(this).val()===''){ return true; }
					var posts_next = JSON.parse($(this).attr('data-objects'));
					var intersect_posts = $(posts).filter(posts_next);
					if(intersect_posts.length<=0)
					{
						$(this).hide();
					}
				});
			});
		});
		//Code for sermon filters End
    });
	
	$( document ).ajaxStop( function() {
		NATIVE.toolTipLive();
	});
	
// FITVIDS
    $(".navigation, .widget, .fw-video, .video-container").fitVids();
// Design Functions
    $(".events-listing .item").each(function() {
        var eventHeight = $(this).height();
        $(this).find(".to-event-url").css("height", eventHeight);
    });
    $(window).resize(function() {
        $(".events-listing .item").each(function() {
            var eventHeight = $(this).height();
            $(this).find(".to-event-url").css("height", eventHeight);
        });
    });
    $(".navigation ul li").mouseover(function() {
        var the_width = $(this).find("a").width();
        var child_width = $(this).find("ul").width();
        var width = parseInt((child_width - the_width) / 2);
        $(this).find("ul").css('left', - width);
    });
    $(".top-navigation li").mouseover(function() {
        var the_width = $(this).find("a").width();
        var child_width = $(this).find("ul").width();
        var width = parseInt((child_width - the_width) / 2);
        $(this).find("ul").css('left', -width);
    });
    $(window).load(function() {
        $(".format-image").each(function() {
            $(this).find(".media-box").append("<span class='zoom'><i class='fa fa-search'></i></span>");
        });
        $(".format-standard").each(function() {
            $(this).find(".media-box").append("<span class='zoom'><i class='fa fa-plus'></i></span>");
        });
        $(".format-video").each(function() {
            $(this).find(".media-box").append("<span class='zoom'><i class='fa fa-play'></i></span>");
        });
        $(".format-link").each(function() {
            $(this).find(".media-box").append("<span class='zoom'><i class='fa fa-link'></i></span>");
        });
        $(".media-box .zoom").each(function() {
            var mpwidth = $(this).parent().width();
            var mpheight = $(this).parent().find("img").height();
            $(this).css("width", mpwidth);
            $(this).css("height", mpheight);
            $(this).css("line-height", mpheight + "px");
        });
		$('.goingon-events-floater').animate({opacity:1},[1000]);
    });
    $(window).resize(function() {
        $(".media-box .zoom").each(function() {
            var mpwidth = $(this).parent().width();
            var mpheight = $(this).parent().find("img").height();
            $(this).css("width", mpwidth);
            $(this).css("height", mpheight);
            $(this).css("line-height", mpheight + "px");
        });
        if ($(window).width() > 992) {
            $(".main-menu-wrapper").css("display", "block");
        } else {
            $(".main-menu-wrapper").css("display", "none");
        }
    });
    /* List Styles */
	$('ul.chevrons li:even i').after('<i class="icon icon-envelope-alt"></i>');
	$('ul.chevrons li:odd i').after('<i class="icon icon-film"></i>');
	$('.goingon-events-floater').prepend('<i class="fa flo-arrow fa-caret-down"></i> ');
// Featured Event Widget
$(".featured_event_widget").find(".sidebar-widget-title h3").prepend("<span class='featured-star'><i class='fa fa-star'></i></span>");
$(".featured_event_widget").find("h4.featured-event-title a").append(" <i class='fa fa-caret-right'></i>");
$(".featured_event_widget").has("img.featured-event-image").find(".featured-event-time").css("position","absolute");
//Donation Modal
$(".donate-paypal").click(function(){
    var CauseName = $(this).parents(".cause-item").find("h3").html();
    $(".payment-to-cause").html(CauseName);
});
$('select[name="donation amount"]').change(function(){
  if ($(this).val() === "101")
  {
    $('.custom-donate-amount').show();
    $('input[name="Custom Donation Amount"]').focus();
  }
  else
  {
    $('.custom-donate-amount').hide();
  }
});
jQuery('video.custom-video').mediaelementplayer();
    if ($('.audio-player').length) {
        var audio_player = new MediaElementPlayer('.audio-player');
        $(".audio-player").css('max-width', '100%');
        setTimeout(function() {
            $(window).trigger('resize');
            if ($('.video-container').length) {
                $('.audio-container').hide();
            }
            if (window.location.hash === '#play-audio') {
                $('.video-container').hide();
                $('.audio-container').show();
            }
        }, 500);
        $(window).bind('load debouncedresize', function() {
            $('.mejs-time-rail').width($('.mejs-time-rail').width() - 2);
        });
    }
    $('.play-video-link').click(function(event) {
        event.preventDefault();
        var video_url = $(this).attr('href');
        var video_container = $('.video-container');
        if (video_url && video_container) {
            var embed_code = video_container
                    .html()
                    .replace('autoplay=0', 'autoplay=1');
            if (embed_code) {
                var audio_container = $('.audio-container');
                if (audio_container.length) {
                    audio_player.pause();
                    audio_container.hide();
                }
                video_container
                        .html(embed_code)
                        .show();
            }
        }
    });
    $('.play-audio-link').click(function(event) {
        event.preventDefault();
        $('.video-container').hide();
        var video_container = $('.video-container');
        if (video_container.length) {
            var embed_code = video_container
                    .html().replace('autoplay=1', 'autoplay=0');
            video_container.html(embed_code);
        }
        $('.audio-container').show();
        audio_player.pause();
        audio_player.play();
        $(window).trigger('resize');
    });
	$(".widget_featured_event").find(".sidebar-widget-title h3").prepend("<span class='featured-star'><i class='fa fa-star'></i></span>");
	$(".widget_featured_event").find("h4.featured-event-title a").append(" <i class='fa fa-caret-right'></i>");
	$(".widget_featured_event").has("img.featured-event-image").find(".featured-event-time").css("position","absolute");
    
	// Animation Appear
    $("[data-appear-animation]").each(function() {
        var $this = $(this);
        $this.addClass("appear-animation");
        if (!$("html").hasClass("no-csstransitions") && $(window).width() > 767) {
            $this.appear(function() {
                var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);
                if (delay > 1)
                    $this.css("animation-delay", delay + "ms");
                $this.addClass($this.attr("data-appear-animation"));
                setTimeout(function() {
                    $this.addClass("appear-animation-visible");
                }, delay);
            }, {accX: 0, accY: -150});
        } else {
            $this.addClass("appear-animation-visible");
        }
    });
// Animation Progress Bars
    $("[data-appear-progress-animation]").each(function() {
        var $this = $(this);
        $this.appear(function() {
            var delay = ($this.attr("data-appear-animation-delay") ? $this.attr("data-appear-animation-delay") : 1);
            if (delay > 1)
                $this.css("animation-delay", delay + "ms");
            $this.addClass($this.attr("data-appear-animation"));
            setTimeout(function() {
                $this.animate({
                    width: $this.attr("data-appear-progress-animation")
                }, 1500, "easeOutQuad", function() {
                    $this.find(".progress-bar-tooltip").animate({
                        opacity: 1
                    }, 500, "easeOutQuad");
                });
            }, delay);
        }, {accX: 0, accY: -50});
    });
//Parallax	
    if (!Modernizr.touch) {
        $(window).bind('load', function() {
            parallaxInit();
        });
    }
    function parallaxInit() {
        $('.parallax1').parallax("50%", 0.1);
        $('.parallax2').parallax("50%", 0.1);
        $('.parallax3').parallax("50%", 0.1);
        $('.parallax4').parallax("50%", 0.1);
        $('.parallax5').parallax("50%", 0.1);
        $('.parallax6').parallax("50%", 0.1);
        $('.parallax7').parallax("50%", 0.1);
        $('.parallax8').parallax("50%", 0.1);
        /*add as necessary*/
    }
    /* Window Height/Width Getter Class */
    var wheighter = $(window).height();
    var wwidth = $(window).width();
    $(".wheighter").css("height", wheighter);
    $(".wwidth").css("width", wwidth);
    $(window).resize(function() {
        var wheighter = $(window).height();
        var wwidth = $(window).width();
        $(".wheighter").css("height", wheighter);
        $(".wwidth").css("width", wwidth);
    });
	// Staff Items Equal Height
	jQuery(function() {
		// apply matchHeight to each item container's items
		$('.content').each(function() {
			$(this).find('.staff-item').find('.grid-item-inner').matchHeight();
		});
	});
});
jQuery(window).bind("load", function() {
    if ( document.location.href.indexOf('#playvideo') > -1 ) {
		var video_container = jQuery('.video-container');
		var embed_code = video_container
                    .html()
                    .replace('autoplay=0', 'autoplay=1'); // same for YouTube and Vimeo
					if (embed_code) {
                // replace embed code and show
                video_container
                        .html(embed_code)
                        .show();
            }
    }
});
jQuery(window).bind("load", function() {
    if ( document.location.href.indexOf('#read') > -1 ) {
		 var video_container = jQuery('.video-container');
        if (video_container.length) { // if there is video
            var embed_code = video_container
                    .html().replace('autoplay=1', 'autoplay=0'); // same for YouTube and Vimeo
            video_container.html(embed_code).hide();
        }
    }
});