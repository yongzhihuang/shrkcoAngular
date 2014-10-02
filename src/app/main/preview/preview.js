angular.module( 'shrkco.main.preview', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {

  $stateProvider.state('main.preview', {
    url: '/preview',
    controller: 'previewCtrl',
    templateUrl: 'main/preview/preview.tpl.html',
    data:{ pageTitle: 'Step 1: preview' }  
  });

})

.controller( 'previewCtrl', function previewCtrl( $scope) {
	$scope.sectionDescription = 'Your preview and profile settings';
})

;
