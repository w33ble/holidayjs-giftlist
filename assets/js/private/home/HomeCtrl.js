angular.module('HomeMod').controller('DashCtrl',['$scope', '$http', function($scope, $http){
	$scope.getUser = function() {
		console.log('Getting user... ');

		$http.get('/getuser')
		.then(function onSuccess(user){
			$scope.user = user.data;
		})
		.catch(function onError(error){
			console.log(error);
		})
	}
}])