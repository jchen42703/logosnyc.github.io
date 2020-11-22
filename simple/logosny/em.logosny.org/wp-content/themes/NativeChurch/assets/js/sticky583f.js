  jQuery(function($) {
  $(document).ready(function() {
        if ($(window).width() > 992) {
            $(".main-menu-wrapper").sticky({topSpacing: 0});
        }
        if ($(window).width() > 992 && $('.body').hasClass('header-style4')) {
            $(".site-header").sticky({topSpacing: 0});
        }
    }
   );
  })