angular.module('presentica.controllers', [])

// .controller('SignInCtrl', function($scope, $http) {

// 	$http.get('127.0.0.1:3306/presentica/acctPwd')
// 	.success(function(resp) {
// 		console.log(resp);
// 	})
  
// })

.controller('SignInCtrl', function($scope, $rootScope, $state) {
  
  $scope.signIn = function(user) {
  // 	if (user.acct == 'tch') {
  // 		$rootScope.userole = 'tch';
		// $state.go('tab.lesson');
  // 	};
  // 	if (user.acct == 'stu') {
  // 		$rootScope.userole = 'stu';
		$state.go('tab.lesson');
  	};
})

.controller('RollCallCtrl', function($scope, $state) {

  $scope.rollCall = function() {

      //

  }
  
})