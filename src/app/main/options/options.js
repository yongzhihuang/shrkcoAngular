angular.module( 'shrkco.main.options', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {

  $stateProvider.state('main.options', {
    url: '/options',
    controller: 'optionsCtrl',
    templateUrl: 'main/options/options.tpl.html',
    data:{ pageTitle: 'Step 1: options' }  
  });

})

.controller( 'optionsCtrl', function optionsCtrl( $scope) {
	$scope.sectionDescription = 'Your options and profile settings';
})

;
