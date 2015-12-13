angular.module('giftList').factory('HomeModule', HomeModule);
HomeModule.$inject = ['$http'];
function HomeModule($http) {
  var service = {
    getUsers: getUsers,
    getList: getList,
    getLists: getLists
  };
  return service;

  function getUsers() {
    return $http({
      method: 'GET',
      url: '/users'
    })
  }

  function getList() {
    return $http({
      method: 'GET',
      url: '/lists'
    })
  }

  function getLists(id) {
    return $http({
      method: 'GET',
      url: '/lists/' + id
    })
  }

}