var app = angular.module('kB', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/categories', {
          templateUrl: 'views/categories.view.html',
          controller:  'CategoriesCtrl'
        }).
        when('/articles', {
          templateUrl: 'views/articles.view.html',
          controller:  'ArticlesCtrl'
        }).
        when('/articles/details/:id', {
          templateUrl: 'views/article.details.view.html',
          controller:  'ArticleDetailsCtrl'
        }).
        when('/articles/category/:category', {
          templateUrl: 'views/cat.article.view.html',
          controller:  'ArticlesCatCtrl'
        }).
        when('/articles/add', {
          templateUrl: 'views/add.article.view.html',
          controller:  'ArticlesCreateCtrl'
        }).
        when('/articles/edit/:id', {
          templateUrl: 'views/edit.article.view.html',
          controller:  'ArticlesEditCtrl'
        }).
        otherwise({redirectTo: '/categories'})
}]);
