angular.module('presentica', ['ionic', 'ngCordova', 'presentica.controllers', 'presentica.services', 'presentica.elastichat'])

.run(function($ionicPlatform) {
 $ionicPlatform.ready(function() {
   if(window.cordova && window.cordova.plugins.Keyboard) {
     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
     // for form inputs)
     cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

     // Don't remove this line unless you know what you are doing. It stops the viewport
     // from snapping when text inputs are focused. Ionic handles this internally for
     // a much nicer keyboard experience.
     cordova.plugins.Keyboard.disableScroll(true);
   }
   if(window.StatusBar) {
     StatusBar.styleDefault();
   }
 });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('signin', {
      url: '/sign-in',
      templateUrl: 'templates/sign-in.html',
      controller: 'SignInCtrl'
    })

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    .state('tab.lesson', {
      url: '/lesson',
      views: {
        'tab-lesson': {
            templateUrl: 'templates/tab-lesson.html',
            controller: 'RollCallCtrl'
        }
      }
    })

    .state('tab.roll-call', {
      url: '/lesson/roll-call',
      views: {
        'tab-lesson': {
            templateUrl: 'templates/lesson-roll-call.html',
        }
      }
    })

    .state('tab.info', {
      url: '/info',
      views: {
        'tab-info': {
          templateUrl: 'templates/tab-info.html'
        }
      }
    })

    .state('tab.detail', {
      url: '/info/detail',
      views: {
        'tab-info': {
          templateUrl: 'templates/info-detail.html',
          controller: 'UserMessagesCtrl'
        }
      }
    })

    .state('tab.me', {
      url: '/me',
      views: {
        'tab-me': {
          templateUrl: 'templates/tab-me.html',
          controller: 'LogOutCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/sign-in');

})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('bottom');

}])

.directive('hideTabs', function ($rootScope) {

  return {
    restrict: 'A',
    link: function(scope, element, attributes) {
      scope.$on('$ionicView.beforeEnter', function () {
        scope.$watch(attributes.hideTabs, function (value) {
          $rootScope.hideTabs = value;
        });
      });

      scope.$on('$ionicView.beforeLeave', function () {
        $rootScope.hideTabs = false;
      });
    }
  };
})