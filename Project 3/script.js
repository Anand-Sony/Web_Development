$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        $("#myHeader").fadeOut();
      } else {
        $("#myHeader").fadeIn();
      }
    });
  });
