angular.module('presentica', ['ionic', 'presentica.controllers', 'presentica.services'])

//.run(function($ionicPlatform) {
//  $ionicPlatform.ready(function() {
//    if(window.cordova && window.cordova.plugins.Keyboard) {
//      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//      // for form inputs)
//      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//
//      // Don't remove this line unless you know what you are doing. It stops the viewport
//      // from snapping when text inputs are focused. Ionic handles this internally for
//      // a much nicer keyboard experience.
//      cordova.plugins.Keyboard.disableScroll(true);
//    }
//    if(window.StatusBar) {
//      StatusBar.styleDefault();
//    }
//  });
//})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    .state('tab.class', {
      url: '/class',
      views: {
        'tab-class': {
          templateUrl: 'templates/tab-class.html',
        }
      }
    })

    .state('tab.info', {
      url: '/info',
      views: {
        'tab-info': {
          templateUrl: 'templates/tab-info.html',
        }
      }
    })

    .state('tab.me', {
      url: '/me',
      views: {
        'tab-me': {
          templateUrl: 'templates/tab-me.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/class');

});