$(document).ready(function () {
  // Do animations.
  //$('.logo').addClass('slide-in');

  // On nav-item click, scroll to div. //
	$('.header a').on('click', function(e) {
		var link = $(this).attr('href');
		$('html, body').animate({
	            scrollTop: $(link).offset().top
	        }, 800);
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


  // Change <i> CSS on skill section hover.
  $('.skill-section').hover(function() {
    $(this).find('i').css('text-shadow', '0px 10px 10px #000');
  },
  function() {
    $(this).find('i').css('text-shadow', 'none');
  });

  // Test nav menu morph.
  $('.navbar-toggle').on('click', function() {
    $('.icon-bar:nth-child(4)').toggleClass('hide');
    $('.icon-bar:nth-child(2)').toggleClass('rotate-forward');
    $('.icon-bar:nth-child(3)').toggleClass('rotate-backward');
  });

});