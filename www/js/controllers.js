angular.module('presentica.controllers', [])

.controller('SignInCtrl', function($rootScope, $state) {

  $rootScope.signIn = function(user) {
  	if (user.acct == user.pwd && (user.acct == '1000' || user.acct == '9999'
     || user.acct == '16000000000' || user.acct == '16011111111' || user.acct == '16022222222' || user.acct == '16033333333' )) {
      if (user.acct == '1000') {
        $rootScope.idNumber = '1000',
        $rootScope.pic = 'img/person_assertive.png',
        $rootScope.address = '华老师'
      } else if (user.acct == '9999') {
        $rootScope.idNumber = '9999',
        $rootScope.pic = 'img/person_energized.png',
        $rootScope.address = '东老师'
      } else if (user.acct == '16000000000') {
        $rootScope.idNumber = '16000000000',
        $rootScope.pic = 'img/person_balanced.png',
        $rootScope.address = '政同学'
      } else if (user.acct == '16011111111') {
        $rootScope.idNumber = '16011111111',
        $rootScope.pic = 'img/person_calm.png',
        $rootScope.address = '法同学'
      } else if (user.acct == '16022222222') {
        $rootScope.idNumber = '16022222222',
        $rootScope.pic = 'img/person_positive.png',
        $rootScope.address = '大同学'
      } else {
        $rootScope.idNumber = '16033333333',
        $rootScope.pic = 'img/person_royal.png',
        $rootScope.address = '学同学'
      }
		$state.go('tab.lesson');
  	};
  }
})

.controller('RollCallCtrl', function($scope, $state) {

  $scope.rollCall = function() {

      //

  }
  
})

.controller('LogOutCtrl', function($rootScope, $state) {

  $rootScope.logOut = function() {
    $rootScope.idNumber = '',
    $rootScope.pic = '',
    $rootScope.address = ''
    $state.go('signin');
    };
  }
)