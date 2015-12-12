/* global angular */
angular.module('giftList', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider
  .when('/login', {
    templateUrl: '/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'vm'
  })
  .when('/home', {
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  });
}]);

angular.module('giftList').controller('MainCtrl', MainCtrl);

function MainCtrl () {
  var vm = this;
}