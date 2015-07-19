var app = angular.module("computersol", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider. //route1
  when('/main', {
      templateUrl: 'main.html',
      controller: 'MainCtrl'
    })
    .when('/about', { //route2
      templateUrl: 'about.html',
      controller: 'MainCtrl'
    })
    .when('/services', {
      templateUrl: 'services.html',
      controller: 'ServicesCtrl'
    })
    .when('/contact', {
      templateUrl: 'contact.html',
      controller: 'ContactCtrl'
    })
    .otherwise({
      redirectTo: '/main'
    });
}])

.controller('MainCtrl', ['$scope', function($scope) {
  console.log('This is the main controller');
}])
.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('services.json').then(function(response){
    console.log("Here");
    console.log(response.data);
    $scope.services = response.data;
  });
}])
.controller('ContactCtrl', ['$scope', function($scope) {
  console.log('This is the contact controller');
}]);