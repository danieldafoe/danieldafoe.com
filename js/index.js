// ==========================================================================
// JavaScript for danieldafoe.github.io
// ==========================================================================

// Nothing groundbreaking to see here. Sorry.

// Avoid naming collisions
'use strict';

// Globally declare frequent element retrievals
var nav = document.querySelector('nav');
var navLinks = document.querySelectorAll('.nav-inner > a');
var navBtn = document.querySelector('.nav-reveal button');
var navReveal = document.querySelector('.nav-reveal');

document.addEventListener('DOMContentLoaded', init);

function init() {
  // Adding some flair to my URL--with pizza!
  window.location.hash = "🍕";

  // Clear the form on page load.
  clearForm();

  // Test adding success class to submit button
  var contactSubmitBtn = document.querySelector('.btn-default');
  contactSubmitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    this.blur();
    this.classList.add('submitting');

    setTimeout(function() {
      contactSubmitBtn.classList.remove('submitting');
      contactSubmitBtn.classList.add('submitted');
    }, 3000);
  });

  // ANIMATION
  //
  //
  // Animation - Navigation
  navReveal.classList.add('nav-reveal--in');

  // Animation - Logo - Name
  var logoName = document.querySelector('.logo h1');
  logoName.style.webkitTransform = 'translate(0,0)';
  logoName.style.mozTransform = 'translate(0,0)';
  logoName.style.msTransform = 'translate(0,0)';
  logoName.style.oTransform = 'translate(0,0)';
  logoName.style.transform = 'translate(0,0)';

  // Animation - Logo - Title
  var logoTitle = document.querySelector('.logo p');
  logoTitle.style.webkitTransform = 'translate(0,0)';
  logoTitle.style.mozTransform = 'translate(0,0)';
  logoTitle.style.msTransform = 'translate(0,0)';
  logoTitle.style.oTransform = 'translate(0,0)';
  logoTitle.style.transform = 'translate(0,0)';
}

//
// Events
// --------------------------------------------------------------------------
document.addEventListener('keydown', function(e) {
  handleKeydown(e);
});

function handleKeydown(e) {
  var key = e.keyCode || e.which;

  if (key === 27) {
    // ESC key pressed
    if (navIsOpen()) {
      closeMenu();
    }
  }
  else if (key === 9) {
    // Tab key pressed
    if (navIsOpen()) {
      if (e.target.hash === '#contact') {
        // Tabbed from the last link in the menu
        e.preventDefault();
        navBtn.focus();
      }
      else if (e.target.nodeName === 'BUTTON') {
        // Tabbed from the menu button
        e.preventDefault();
        navLinks[0].focus();

      }
    }
  }
  else if (key === 13) {
    // Enter key pressed
    if ((document.activeElement.parentElement.classList).contains('nav-reveal')) {
      navBtn.focus();
      // Change tabindex of each nav link
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].setAttribute('tabindex', -1);
      }
    }
  }
  else if (key === 38) {
    if (navIsOpen()) {
      $(document.activeElement).prev('a[tabindex]').focus();
    }
  }
  else if (key === 40) {
    if (navIsOpen()) {
      $(document.activeElement).next('a[tabindex]').focus();
    }
  }
}

function navIsOpen() {
  return document.querySelector('nav').classList.contains('in');
}
function closeMenu() {
  var nav = document.querySelector('nav');

  if (navIsOpen()) {
    // Nav is open
    nav.classList.remove('in');
    nav.classList.add('out');

    // Accessibility behaviour
    navBtn.setAttribute('aria-expanded', 'false');

    // Change nav-reveal button colour
    navBtn.style.color = '#fff';

    // Change button text
    navBtn.innerHTML = '<i class="fa fa-bars"></i> MENU';

    // Change tabindex of each nav link
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].setAttribute('tabindex', -1);
    }

    // Bring focus back to button
    navBtn.focus();
  }
}
function openMenu() {
  if (!navIsOpen()) {
    // Nav is open
    nav.classList.toggle('out');
    nav.classList.add('in');

    // Accessibility behaviour
    navBtn.setAttribute('aria-expanded', 'true');

    // Change nav-reveal button colour
    navBtn.style.color = '#1663c7';

    // Change button text
    navBtn.innerHTML = '<i class="fa fa-close"></i> CLOSE';

    // Change tabindex of each nav link
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].setAttribute('tabindex', 0);
    }

    // Set focus to the first item in the menu
    document.querySelector('.nav-inner > a:first-child').focus();
  }
}

navBtn.addEventListener('click', function() {
  if (!navIsOpen()) {
    openMenu();
  }
  else {
    closeMenu();
  }
})

document.querySelector('.nav-inner').addEventListener('click', handleNavLink);

function handleNavLink() {
  console.log(this);
}

$('.nav-inner a').on('touchend click', function(e) {
	var link = $(this).attr('href');
	$('html, body').animate({
            scrollTop: $(link).offset().top
        }, 800);

  closeMenu();
});

//
// Social
// --------------------------------------------------------------------------
// Submit clicks to Google Analytics for tracking
// Send a twitter click to GA.
document.getElementById('twitter-link').addEventListener('click', recordInteraction('twitter'));
document.getElementById('linkedin-link').addEventListener('click', recordInteraction('linkedin'));
document.getElementById('github-link').addEventListener('click', recordInteraction('github'));
document.getElementById('codepen-link').addEventListener('click', recordInteraction('linkedin'));

function recordInteraction(link) {
  ga('send', 'event', 'button', 'click', link);
}

//
// Contact
// --------------------------------------------------------------------------

// Check if the contact form is blank
function checkForm() {
  var email = $('#email').val();
  var msg = $('#msg').val();
  
  if (email === "" ||
      msg === "") {
        return false;
      }
  else {
    return true;
  }
}
// Function for clearing the form data
function clearForm() {
  var inputs = document.getElementsByTagName('input');
  var textareas = document.getElementsByTagName('textarea');

  // for (var i = inputs.length; i >= 0; i--) {
  //   inputs[i].value = '';
  // }
  // for (var i = textareas.length; i >= 0; i--) {
  //   textareas[i].value = '';
  // }
}
