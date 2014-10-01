angular.module( 'shrkco.login', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'loginService'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    views: {
      "main": {
        controller: 'loginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    },
    data:{ pageTitle: 'shrkco: Login' }
  });
})

.controller( 'loginCtrl', function loginCtrl( $scope , $location, loginService) {

  //doesn't work. User needs to be redirected to dashboard if they're already log in
  $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    var promise = loginService.islogged();
      promise.then(function(message){
        if (message.data === 'authenticated') {
          $location.path('/dashboard');
        }
    });
  });

  $scope.loginStatus = null;
  $scope.login = function(data){
    loginService.login(data,$scope, '/dashboard'); //call login service
  };
})

;
