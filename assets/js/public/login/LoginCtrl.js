angular.module('LoginMod').controller('LoginCtrl',['$scope', '$http', function($scope, $http){
	console.log('Login Controller initialized...');

	$scope.runLogin = function(){
		console.log("login submitted");
		$http.put('/login', {
			email: $scope.email,
			password: $scope.password
		}).then(function onSuccess(){
			console.log('login passed');
			window.location = '/home'
		}).catch(function onError(err){
			if(err.status == 400 || 404){
				toastr.error('Invalid credentials', 'Error', {
					closeButton: true
				});
				return;
			}
			toastr.error('An error has occured, please try again later', 'Error', {
					closeButton: true
			});
			return;
		})
	};
	$scope.runNothing = function() {
		console.log(document.URL);
	}
}]);