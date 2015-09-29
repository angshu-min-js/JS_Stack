'use strict';

/**
 * @ngdoc overview
 * @name 8PubnubChatApp
 * @description
 * # 8PubnubChatApp
 *
 * Main module of the application.
 */
angular
  .module('8PubnubChatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pubnub.angular.service'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/join', {
        templateUrl: 'views/join.html',
        controller: 'JoinCtrl'
      })
      .otherwise({
        redirectTo: '/join'
      });
  });
