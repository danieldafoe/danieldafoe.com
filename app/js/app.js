(function() {
  var app = angular.module("switcher", []);


  app.controller("ProjectController", function() {
    this.projNum = 0;
    this.projects = projects;
    this.nextProj = function() {
      var proj = this.projNum + 1;
      if (proj < projects.length) {
        this.projNum += 1;
      }
    };
    this.prevProj = function() {
      var proj = this.projNum - 1;
      if (proj >= 0) {
        this.projNum -= 1;
      }
    };
  });
  
  var projects = [
    {
      img:'res/app-raven5.png',
      name:'RAVEN5 Mobile App',
      url:'',
      skills: ["PhoneGap", "jQuery Mobile", "HTML5", "CSS3", "SASS", "JavaScript"],
      description:'The RAVEN5 mobile app allows users to get, view and read recent blog, video, and take5 posts, as well as browse their store and about page. I was the lead mobile developer for this project, which was based on an already finalized Photoshop mockup. To test this application I used physical devices, the Ripple extension for Google Chrome, as well as the SDKs for both iOS (Xcode), and Android (Android SDK).',
    },
    {
      img:'res/app-uosc.png',
      name:'Oakville Shops Mobile App',
      url:'',
      skills: ["PhoneGap", "jQuery Mobile", "HTML5", "CSS3", "SASS", "JavaScript", "UX"],
      description:'The Oakville Shops mobile app allows users to get store information, upcoming news and events, view - and redeem - coupons, check out a mall map, and get directions from their current location to the shopping centre. Again I was the lead mobile developer for this project, and developed based on an already finalized Photoshop mockup. I also incorporated subtle pop-up messages to inform users of actions they could take within the app in order to improve their experience.',
    },
    {
      img:'res/r5apps-logo.png',
      name:'R5APPS Content Writing',
      url:'http://www.r5apps.com',
      skills: ["Creative Writing", "Service Pricing"],
      description:'R5APPS is a company that is able to design, develop, and deploy mobile applications. They can build off of others\' ideas, start from scratch, or simply refactor an existing application on the market. For this company I was in charge of the creation of the main tagline, the ideation and writing of each blurp under the Services section, and helping work out a pricing strategy for their development services.',
    },
    {
      img:'res/logo-kl.png',
      name:'Kasty Landscaping Website',
      url:'http://www.kastylandscaping.com',
      skills: ["jQuery", "JavaScript", "HTML5", "CSS3", "SASS", "Bootstrap", "PHP", "Website Layout/Design"],
      description:'Kasty Landscaping prides itself on being the go-to solution for all of your outdoor needs. Whether you need decks or gardens, interlock or irrigation, Kasty Landscaping can do it all. Kasty Landscaping came to me in need of a complete redesign of their old website. This multi-page website needed a complete user interface overhaul, as well as being made responsive for viewing on mobile devices. It now has a modern look, as well as a cost estimator.',
    },
    {
      img:'res/nuview-bg.png',
      name:'Nuview Web & Mobile Application',
      url:'',
      skills: ["jQuery", "HTML5", "CSS3", "Microsoft Visio 2012", "Visual Studio 2012"],
      description:'Nulogx is a leader in transportation management solutions. NuView introduces the ability to track truck drivers while they are en route, predict their estimated arrival time at their next stop, and, if the driver is going to be late, send a message to the dispatcher so that the appointment can be rescheduled. I was in charge of wireframing the Android application, as well as UI and UX for the web application.',
    },
    {
      img:'res/logo.png',
      name:'Personal Website',
      url:'',
      skills: ["HTML5", "CSS3", "SASS", "Bootstrap", "JavaScript", "Angular JS"],
      description:'The web page you are currently viewing is the 2nd iteration of my portfolio website. The first can be found at http://portfolio.danieldafoe.com. In order to try out new technologies (Angular JS), I decided to redo my entire portfolio. This time around I focused on less colour intensity, trying a new framework I hadn\'t used before, and discovering new ways to organize and display the content.',
    }
  ];
})();