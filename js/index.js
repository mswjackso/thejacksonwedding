
// When the DOM is fully loaded
$(document).ready(function() {

  // Set up listener for window size
  // function onResize() {
  //   if ($(window).width() < 625) {
  //     $('#navbar').attr('id', 'mobileNavbar');
  //   } else {
  //     $('#mobileNavbar').attr('id', 'navbar');
  //   }
  // }
  // $(window).resize(onResize);
  // onResize();


  // Set up listeners for the desktop navbar
  $('.navlink').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('data-scroll-to')).offset().top
    }, 500, 'swing');
  });
  $(document).on('scroll', function() {
    if ($('.navbar').length > 0) {
      var navbarTop = $('.navbar').offset().top - $(window).scrollTop();
      if (navbarTop <= 0 && $('.navbar').hasClass('navbar-fixed-bottom')) {
        $('.navbar').removeClass('navbar-fixed-bottom').addClass('navbar-static-top');
      } else if ($(window).scrollTop() <= ($(window).height() - $('.navbar').height())) {
        $('.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-bottom');
      }
    }
  });

  // Set up listeners for the mobile navbar
  $()

  // Set up under construction areas
  $('.underConstruction').each(function() {
    $(this).css({
      'background-image': 'none',
      'background-color': '#BBB',
      'border-top': '1px solid black'
    });
    $(this).html(
      '<div style="text-align:center;position:relative;top:40%;height:20%;">\
        <img src="../images/construction.gif" /><br />\
        Under Construction\
      </div>'
    );

  });

});
