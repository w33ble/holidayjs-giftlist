angular.module('giftList').controller('LoginCtrl', LoginCtrl);
LoginCtrl.$inject = ['loginModule'];

function LoginCtrl (loginModule) {
  var vm = this;

  vm.runLogin = function(){
    console.log("login submitted");
    loginModule.login(vm.email, vm.password)
    .then(function  (response) {
      debugger;
      put(key, value, [options]);
    }, function (error) {
      vm.displayError = true;
    });
  }
}