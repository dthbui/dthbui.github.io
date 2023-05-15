
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    
  })(window.jQuery);

function confirmExternal() {
  if (confirm("By clicking this link, you are leaving to an external website. Please press OK to confirm.")) {
  return true;
  } else {
  return false;
  }
}