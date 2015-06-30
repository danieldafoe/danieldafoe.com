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


  // On nav-item click, scroll to div. //
  /*
	$('.header a').on('click', function(e) {
		var link = $(this).attr('href');
		$('html, body').animate({
	            scrollTop: $(link).offset().top
	        }, 800);
	});
  */

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