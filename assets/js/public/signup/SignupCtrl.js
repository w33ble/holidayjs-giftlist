angular.module('SignupMod').controller('SignupCtrl',['$scope', '$http', function($scope, $http){
	console.log('Signup Controller initialized...');

	$scope.runSignup = function(){
		console.log('Signing Up '+$scope.email);

		// Submit To Sails Server
		$http.post('/signup', {
			email: $scope.email,
			password: $scope.password
		})
		.then(function onSuccess(response){
			window.location = '/home'
			$http.put('/login', {
				email: $scope.email,
				password: $scope.password
		})
		.catch(function onError(err){
			console.log('Error: ',err);
		})
	})
}}])