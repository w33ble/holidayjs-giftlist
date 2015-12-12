angular.module('giftList').factory('loginModule', loginModule);
loginModule.$inject = ['$http'];
function loginModule($http) {
  var service = {
    login: login,
    logout: logout
  };
  return service;

  function login(email, password) {
    return $http({
      method: 'PUT',
      url: '/login',
      data: {"email":email, "password":password}
    })
  }

  function logout () {
    authTokenFactory.setToken();
  }

}