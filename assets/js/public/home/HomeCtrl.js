angular.module('giftList').controller('HomeCtrl', HomeCtrl);
HomeCtrl.$inject = ['HomeModule'];

function HomeCtrl (HomeModule) {
  var vm = this;

  vm.panel1Active = true;
  
  HomeModule.getUsers().then(function(resp) {
    vm.users = resp.data;
    vm.users.forEach(function(user, i) {
      HomeModule.getLists(user.id).then(function(resp) {
        vm.users[i].lists = resp.data;
        console.log(resp.data);
      })
    })
  }, function(err) {
    console.log(err);
  });

  HomeModule.getList().then(function(resp) {
    vm.lists = resp.data
  }, function(err) {
    console.log(err)
  });
}