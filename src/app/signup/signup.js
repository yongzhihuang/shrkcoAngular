angular.module( 'shrkco.signup', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'shrkco.signupService',
  'loginService'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'signup', {
    url: '/signup',
    views: {
      "main": {
        controller: 'signupCtrl',
        templateUrl: 'signup/signup.tpl.html'
      }
    },
    data:{ pageTitle: 'shrkco: Signup' }
  });
})

.controller( 'signupCtrl', function signupCtrl( $scope, signupService, loginService ) {

  //After account creation and sign up is valid, automatically sign in the user to the dashboard
  $scope.signupStatus = null;
  $scope.signup = function(data){
    signupService.signup(data, $scope, function callback() {
      loginService.login(data,$scope, '/dashboard');
    });
  };
})

;
