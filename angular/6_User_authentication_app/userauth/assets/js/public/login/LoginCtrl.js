angular.module('LoginMod').controller('LoginCtrl', ['$scope','$http','toastr', function($scope, $http, toastr){
    console.log("Innnitialllizeddd")

    $scope.runLogin = function(){
      //console.log("Press kar diya")
      $http.put('/login', {
        email: $scope.email,
        password: $scope.password
      }).then(function onSuccess(){
        console.log("Login Ctrl Success");
        window.location = '/dashboard';
      }).catch(function onError(err){
        if(err.status == 400 || 404){
          console.log("Invalid Credentials")
          toastr.error('Invalid Credentials', 'Error',{
            closeButton: true
          });
          //return;
          toastr.error('An error has occured, please try again later', 'Error',{
            closeButton: true
          });
          return;
        }
      })
    }
}])
