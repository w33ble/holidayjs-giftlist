angular.module('giftList').factory('HomeModule', HomeModule);
HomeModule.$inject = ['$http'];
function HomeModule($http) {
  var service = {
    getUsers: getUsers
  };
  return service;

  function getUsers() {
    return $http({
      method: 'GET',
      url: '/users'
    })
  }

}