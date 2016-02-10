angular.module('presentica.controllers', [])

.controller('SignInCtrl', ['$scope', '$http', 'userCookie', function($scope, $http, user) {
  
  $scope.signIn = function() {

  $http()

  .success(function(user, status) {
  	if (user.status) {
  		//Success signIn
  		user.isSignIn = true;
  		user.acct = user.acct;
  	}
  	else {
  		user.isSignIn = false;
  		user.acct = '';
  	}
  })
  .error(function(user, status) {
  	user.isSignIn = false;
  	user.acct = '';
  })
 
 };
  
})