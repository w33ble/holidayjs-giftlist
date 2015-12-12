angular.module('giftList').controller('SignupCtrl', SignupCtrl);

function SignupCtrl () {
  var vm = this;

  vm.unSignup = function(){
    console.log('Signing Up ');
    // Submit To Sails Server
  }
}
