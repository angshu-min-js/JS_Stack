angular.module('SignupMod').controller('SignupCtrl', ['$scope','$http', function($scope, $http){
    console.log("Innnitialllizeddd")

    $scope.runSignup = function(){
      console.log($scope.name+" Chutia Hai");

      //submit to sail server
      $http.post('/signup', {
        name: $scope.name,
        email: $scope.email,
        password: $scope.password
      })
      .then(function onSuccess(res){
        window.location = '/user'
      })
      .catch(function onError(err){
        console.log('Error'+ err);
      })
    }
}])
