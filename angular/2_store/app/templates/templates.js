angular.module('store.templates', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.
      when('/templates',{
        templateUrl: 'templates/templates.html',
        controller: 'TemplatesCtrl'
      }).
      when('/templates/:id',{
        templateUrl: 'templates/template-details.html',
        controller: 'TemplatesDetailsCtrl'
      })
}])

  .controller('TemplatesCtrl', ['$scope', '$http', function($scope, $http){
    //console.log("Inside Template"+$scope);
    $http.get('json/template.json').success(function(res){
      //console.log(res);
      $scope.templates = res;
    })
  }])
  .controller('TemplatesDetailsCtrl', ['$scope','$http', '$routeParams', '$filter', function($scope, $http, $routeParams, $filter){
    //console.log("Inside D Template"+$scope);
    var templateID = $routeParams.id
    $http.get('json/template.json').success(function(res){
      //console.log(res);
      $scope.templates = $filter('filter')(res, function(d){
        return d.id == templateID;
      })[0];
      $scope.MainImage = $scope.templates.images[0].name;
    });
    $scope.setImage = function(img){
      $scope.MainImage = img.name;
    }
  }]);
