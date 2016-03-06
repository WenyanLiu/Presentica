angular.module('presentica.controllers', [])

.controller('SignInCtrl', function($scope, $state) {

  var idNumber = '00000000000';
  var pic = '';
  var address = '';

  $scope.signIn = function(user) {
  	if (user.acct == user.pwd && (user.acct == '1000' || user.acct == '9999'
     || user.acct == '16000000000' || user.acct == '16011111111' || user.acct == '16022222222' || user.acct == '16033333333' )) {
      if (user.acct == '1000') {
        $scope.idNumber = '1000',
        $scope.pic = 'img/person_assertive.png',
        $scope.address = '华老师'
      } else if (user.acct == '9999') {
        $scope.idNumber = '9999',
        $scope.pic = 'img/person_energized.png',
        $scope.address = '东老师'
      } else if (user.acct == '16000000000') {
        $scope.idNumber = '16000000000',
        $scope.pic = 'img/person_balanced.png',
        $scope.address = '政同学'
      } else if (user.acct == '16011111111') {
        $scope.idNumber = '16011111111',
        $scope.pic = 'img/person_calm.png',
        $scope.address = '法同学'
      } else if (user.acct == '16022222222') {
        $scope.idNumber = '16022222222',
        $scope.pic = 'img/person_positive.png',
        $scope.address = '大同学'
      } else {
        $scope.idNumber = '16033333333',
        $scope.pic = 'img/person_royal.png',
        $scope.address = '学同学'
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