angular.module( 'loginService', [
	'sessionService'
	] )

.factory('loginService',function($http, $location, sessionService){
	var serverBaseUrl = 'http://shrkco.com/';
	return{
		login:function(data,scope,destination){
			var $promise = $http.post(serverBaseUrl + 'server/auth/user.php',data); //send data to user.php
			$promise.then(function(msg){
				var user = msg.data;
				console.log(msg);
				if(user && user.indexOf('ERROR') === -1){
					var username = user.split('_')[0];

					if (username && username !=='') {
						sessionService.set('username', username);
						sessionService.set('user',user);
						$location.path(destination);
					}

				}
				else  {
					scope.loginStatus= 'Sorry we do not recognize your login and password';
					// $location.path('/login');
				}
			});
		},

		logout:function(destination){
			var $destroySessionServer = $http.post(serverBaseUrl + 'server/auth/destroy_session.php');
			sessionService.destroy('user');
			sessionService.destroy('username');
			$location.path(destination);
		},
		
		islogged:function(){
			var $checkSessionServer = $http.post(serverBaseUrl + 'server/auth/check_session.php');
			return $checkSessionServer;
			/*
			if(sessionService.get('user')) return true;
			else return false;
			*/
		}
	};

});
