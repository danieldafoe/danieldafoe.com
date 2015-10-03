// Nothing groundbreaking to see here. Sorry, friend.
//
//
$(document).ready(function () {

  // Clear the form on page load.
  clearForm();

  // Instantiate a wow object
  // Call its init()
  wow = new WOW({
    offset:-20,
    mobile:false,
  });
  wow.init();

  // Animations
  $('.hero-l, .hero-r').css('width','50%');
  $('.logo h1').css({
                      '-webkit-transform':'translate(0,0)',
                      '-moz-transform':'translate(0,0)',
                      '-ms-transform':'translate(0,0)',
                      '-o-transform':'translate(0,0)',
                      'transform':'translate(0,0)'
                    });
  $('.logo h2').css({
                      '-webkit-transform':'translate(0,0)',
                      '-moz-transform':'translate(0,0)',
                      '-ms-transform':'translate(0,0)',
                      '-o-transform':'translate(0,0)',
                      'transform':'translate(0,0)'
                    });
                    
  // Snap selfie on scroll
  var stickyOffset = $('.selfie').offset().top;

  $(window).scroll(function(){
    var sticky = $('.selfie'),
        scroll = $(window).scrollTop();
      
    if (scroll >= stickyOffset) {
      sticky.addClass('rotate-up');
      //$('.selfie img').css('max-width', '175px');
    }
    else sticky.removeClass('rotate-up');
  });


  $('.nav-reveal').on('touch click', function() {
    var nav = $('nav');
    var screen = $('.screen');
    var button = $('.nav-reveal button');
    var navReveal = $('.nav-reveal');

    if (nav.hasClass('out')) {
      //wrapper.addClass('wrapper-out').removeClass('wrapper-in');
      navReveal.addClass('reveal-out').removeClass('reveal-in');
      nav.removeClass('out').addClass('in');
      button.html('<i class="fa fa-close"></i> CLOSE');
      screen.css({'opacity':'1', 'pointer-events':'all'});
    }
    else {
      //wrapper.addClass('wrapper-in').removeClass('wrapper-out');
      navReveal.addClass('reveal-in').removeClass('reveal-out')
      nav.removeClass('in').addClass('out');
      button.html('<i class="fa fa-bars"></i> MENU');
      screen.css('opacity', '0');
    }
  });
  
  // Allow users to click or touch the screen in order to close the menu.
  $('.screen').on('touch click', function() {
    var nav = $('nav');
    var screen = $('.screen');
    var button = $('.nav-reveal button');
    var navReveal = $('.nav-reveal');

    navReveal.addClass('reveal-in').removeClass('reveal-out')
    nav.removeClass('in').addClass('out');
    button.html('<i class="fa fa-bars"></i> MENU');
    screen.css({'opacity':'0', 'pointer-events':'none'});
  });

  // On nav-item click, scroll to div. //
	$('.nav-inner a').on('touchend click', function(e) {
		var link = $(this).attr('href');
		$('html, body').animate({
	            scrollTop: $(link).offset().top
	        }, 800);

    // Ensure the menu closes after a click or touch.
    $('.nav-reveal').click();
	});

  // Submit clicks to Google Analytics.
  // Send a resume click to GA.
  $('#resume-btn').on('click', function() {
    ga('send', 'event', 'button', 'click', 'resume');
  });

  // Send a twitter click to GA.
  $('#twitter-link').on('click', function() {
    ga('send', 'event', 'button', 'click', 'twitter');
  });

  // Send a linkedin click to GA.
  $('#linkedin-link').on('click', function() {
    ga('send', 'event', 'button', 'click', 'linkedin');
  });

  // Send a github click to GA.
  $('#github-link').on('click', function() {
    ga('send', 'event', 'button', 'click', 'github');
  });


  function clearForm() {
    $('input, textarea').each(function(i, el) {
      el.value = "";
    });
  }

});
