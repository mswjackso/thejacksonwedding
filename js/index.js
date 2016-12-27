
// When the DOM is fully loaded
$(document).ready(function() {

  // Set up listeners for the navbar
  $('.navlink').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('data-scroll-to')).offset().top
    }, 1000, 'swing');
  });
  $(document).on('scroll', function() {
    var navbarTop = $('#navbar').offset().top - $(window).scrollTop();
    if (navbarTop <= 0 && $('#navbar').css('position') === 'absolute') {
      $('#navbar').css({
        'position': 'fixed',
        'top': '0px'
      });
    } else if ($(window).scrollTop() <= ($(window).height() - $('#navbar').height())) {
      $('#navbar').css({
        'position': 'absolute',
        'top': ''
      });
    }
  });

});
