/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'shrkco.main', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'loginService',
  'sessionService',
  'ngAnimate',
  'duScroll',
  'shrkco.main.create',
  'shrkco.main.createGroup',
  'shrkco.main.enterLink',
  'shrkco.main.options',
  'shrkco.main.preview'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'main', {
    url: '/',
    views: {
      "main": {
        controller: 'mainCtrl',
        templateUrl: 'main/main.tpl.html'
      }
    },
    data:{ pageTitle: 'ShrkCo: Create and share link bundles with the world' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'mainCtrl', function mainController( $scope, $document ) {
  $scope.creationStarted = false;

  $scope.startCreation = function() {
    $scope.creationStarted = true;
    $scope.showNavigator = true;
  };

  $scope.hideTopNav = false;

  $document.on('scroll', function() {
    console.log('scroll', $document.scrollTop());

      if ($document.scrollTop() === 200) {
        console.log('is top');
        $scope.hideTopNav = true;
        console.log($scope.hideTopNav);
      }
  });
})
;

