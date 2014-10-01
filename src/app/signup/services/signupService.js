angular.module( 'shrkco.signupService', [
	] )

.factory('signupService',function($http, $location){

	//This directive will make a call to server and add a new UNVERIFIED account to the system.
	//If success, the user will be taken to Dashboard where they will finish the rest of the set up process.

	var serverBaseUrl = 'http://shrkco.com/';
	return{
		signup: function(data,scope,callback){
			var $promise = $http.post(serverBaseUrl + 'server/accounts/signup.php', data); //send data to signup.php
			$promise.then(function(status){

				if (status.data.indexOf('ERROR') === -1) {
					callback();
				} else  {
					scope.signupStatus= status.data;
					//$location.path('/signup');
				}
			});
		}
	};

});
