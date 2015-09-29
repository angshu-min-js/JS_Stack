'use strict';

angular.module('8PubnubChatApp')
  .controller('JoinCtrl', ['$scope', '$rootScope', '$location', 'Pubnub', function ($scope, $rootScope, $location, Pubnub){

  $scope.data = {
    username: 'User_'+Math.floor(Math.random()*1000)
  }
    //console.log("Join Controller Hai");
    $scope.join = function(){
      console.log("Joining");
      var _ref, _ref1;
      $rootScope.data || ($rootScope.data = {});
      $rootScope.data.username = (_ref = $scope.data) !=null ? _ref.username : void 0;
      $rootScope.data.city = (_ref1 = $scope.data) !=null ? _ref1.city : void 0;
      $rootScope.data.uuid = Math.floor(Math.random()*100000) + '__' +$scope.data.username;
      console.log($rootScope);

      Pubnub.init({
        subcribe_key: 'sub-c-50b41cb8-7717-11e6-b58f-02ee2ddab7fe',
        publish_key: 'pub-c-c5abd4e8-b6b0-4baa-a5f3-8540e60787ff',
        uuid: $rootScope.data.uuid
      });

      return $location.path('/main');

    }
  }]);
