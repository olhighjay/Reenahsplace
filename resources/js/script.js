$(document).ready(function() {
  
  /* For the sticky navigation */
  $('.js-section-features').waypoint(function(direction) {
    if(direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  })

  /* Scroll on button */
  $('.js-scroll-to-plans').click(function() {
    $('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000)
  })

  $('.js-scroll-to-start').click(function() {
    $('html, body').animate({scrollTop: $('.js-section-features').offset().top}, 1000)
  })


  /* Navigation scroll */
    // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000); 
        return false;
      }
    }
  });


  /* Animation on scroll */
  $('.js-wp-1').waypoint(function(direction) {
    $('.js-wp-1').addClass('animate__animated animate__fadeIn'); 
  }, {
    offset: '50%'
  })

  $('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animate__animated animate__fadeInUp'); 
  }, {
    offset: '50%'
  })

  $('.js-wp-3').waypoint(function(direction) {
    $('.js-wp-3').addClass('animate__animated animate__fadeIn'); 
  }, {
    offset: '50%'
  })

  $('.js-wp-4').waypoint(function(direction) {
    $('.js-wp-4').addClass('animate__animated animate__pulse'); 
  }, {
    offset: '50%'
  })



  
})