angular.module( 'shrkco', [
  'templates-app',
  'templates-common',
  'ngEnter',
  'ui.router',
  'shrkco.home',
  'shrkco.login',
  'shrkco.signup'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/' );
})

.run( function run () {

})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, loginService, sessionService) {
  $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

    //When transitioning to a page that has title
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle;
    }

    //implement a simple redirect for areas that needs authentication to get to


  });

  //Identitity
  $scope.identity = {
    name: 'Shrkco',
    slogan: 'Create and share link bundles with the world'
  };
})

;
