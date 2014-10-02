angular.module( 'shrkco.main.enterLink', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {

  $stateProvider.state('main.enterLink', {
    url: '/enterLink',
    controller: 'enterLinkCtrl',
    templateUrl: 'main/enterLink/enterLink.tpl.html',
    data:{ pageTitle: 'Step 1: enterLink' }  
  });

})

.controller( 'enterLinkCtrl', function enterLinkCtrl( $scope) {
	$scope.sectionDescription = 'Your enterLink and profile settings';
})

;
