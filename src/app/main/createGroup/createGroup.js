angular.module( 'shrkco.main.createGroup', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {

  $stateProvider.state('main.createGroup', {
    url: 'createGroup',
    controller: 'createGroupCtrl',
    templateUrl: 'main/createGroup/createGroup.tpl.html',
    data:{ pageTitle: 'Create a group - Shrkco' }  
  });

})

.controller( 'createGroupCtrl', function createGroupCtrl( $scope) {
	$scope.sectionDescription = 'Your createGroup and profile settings';
})

;
