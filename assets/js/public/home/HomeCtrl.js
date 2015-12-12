angular.module('giftList').controller('HomeCtrl', HomeCtrl);
HomeCtrl.$inject = ['HomeModule'];

function HomeCtrl (HomeModule) {
  var vm = this;

  vm.panel1Active = true;
  
  HomeModule.getUsers().then(function(resp) {
    vm.users = resp.data;
  }, function(err) {
    console.log(err);
  });
}