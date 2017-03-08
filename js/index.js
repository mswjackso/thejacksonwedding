
// When the DOM is fully loaded
$(document).ready(function() {

  // Update the count down every 1 second
  var countDownDate = new Date("Nov 12, 2017 00:00:00");
  var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("titleCountdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

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
