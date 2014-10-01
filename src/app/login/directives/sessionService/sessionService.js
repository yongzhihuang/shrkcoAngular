angular.module( 'sessionService', [] )

.factory('sessionService', ['$http', function($http){
	var serverBaseUrl = 'http://shrkco.com/';
	return{
		set:function(key,value){
			return sessionStorage.setItem(key,value);
		},
		get:function(key){
			return sessionStorage.getItem(key);
		},
		destroy:function(key){
			$http.post(serverBaseUrl + 'server/auth/destroy_session.php');
			return sessionStorage.removeItem(key);
		}
	};
}]);
