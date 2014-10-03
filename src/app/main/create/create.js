angular.module( 'shrkco.main.create', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {

  $stateProvider.state('main.create', {
    url: 'create',
    controller: 'createCtrl',
    templateUrl: 'main/create/create.tpl.html',
    data:{ pageTitle: 'Create a group - Shrkco' }
  });

})

.controller( 'createCtrl', function createCtrl( $scope) {
	$scope.sectionDescription = 'Your create and profile settings';
})

;
