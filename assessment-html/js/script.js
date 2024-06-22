/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function(){
  if ($(window).scrollTop() >= 50) {
      $('header').addClass('scroll');
  }
  else {
      $('header').removeClass('scroll');
  }
});

