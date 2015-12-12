angular.module('giftList').controller('LoginCtrl', LoginCtrl);

function LoginCtrl () {
  var vm = this;

  vm.runLogin = function(){
    console.log("login submitted");
  }
}