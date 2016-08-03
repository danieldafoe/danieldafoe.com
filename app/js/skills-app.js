//
// Create Module
// --------------------------------------------------------------------------
angular.module('skills-app', [])

//
// Controller
// --------------------------------------------------------------------------
.controller('SkillSectionController', function() {
    var skills = this;
    
    skills.sections = [
        {
            title: "Infrequent use",
            items: [
                {item: 'Apple App Store Deployment'},
                {item: 'Google Play Store Deployment'},
                {item: 'Wireframing Tools'},
                {item: 'Adobe PhoneGap'},
                {item: 'PhoneGap Build'},
                {item: 'PhoneGap CLI'},
                {item: 'SQL, PHP'}
            ]
        },
        {
            title: "Always using",
            items: [
                {item: 'HTML5, CSS3, JavaScript'},
                {item: 'Google Analytics, Git'},
                {item: 'Jade, Sass, jQuery'},
                {item: 'Responsive Design'},
                {item: 'Web Accessibility'},
                {item: 'Gulp, Node.js'},
                {item: 'AngularJS'},
                {item: 'Bootstrap'}
            ]
        },
        {
            title: "Once upon a time",
            items: [
                {item: 'Technical document writing'},
                {item: 'Diagram modelling (UML)'},
                {item: 'Requirements gathering'},
                {item: 'Drupal, WordPress'},
                {item: 'Objective-C'},
                {item: 'C#, .NET'},
                {item: 'Java'}
            ]
        }
    ];
})