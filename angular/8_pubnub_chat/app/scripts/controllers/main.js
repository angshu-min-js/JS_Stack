'use strict';

/**
 * @ngdoc function
 * @name 8PubnubChatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 8PubnubChatApp
 */
angular.module('8PubnubChatApp')
  .controller('MainCtrl', ['$scope', '$rootScope', '$location', 'Pubnub', function ($scope, $rootScope, $location, Pubnub) {
    var _ref;
    if (!Pubnub.initialized()){
      $location.path('/join');
    }

    $scope.controlChannel = '__controlChannel';
    $scope.channels = [];

    //create channels
    $scope.createChannel = function(){
      var channel;
      console.log("Channel");
      channel = $scope.newChannel;

      $scope.newChannel = '';

      Pubnub.ngGrant({
        channel: channel,
        read: true,
        write: true,
        callback: function(){
          return console.log(channel+" all set", arguments);
        }
      });

      Pubnub.ngGrant({
        channel: channel+'-pnpres',
        read: true,
        write: false,
        callback: function(){
          return console.log(channel+"Presence all set", arguments);
        }
      });

      Pubnub.ngPublish({
        channel: $scope.controlChannel,
        message: channel
      });

      return setTimeout(function(){
        $scope.subscribe(channel);
        return $scope.showCreate = false;
      }, 100)
    }

    $scope.subscribe = function(channel){
      var _ref;
      console.log("Subcribing...");
      if(channel==$scope.selectedChannel){
        return;
      }
      if($scope.selectedChannel){
        Pubnub.ngUnsubscribe({
          channel: $scope.selectedChannel
        });
      }
      $scope.selectedChannel = channel;
      $scope.message = ['Welcome to '+channel];

      Pubnub.ngSubscribe({
        channel: $scope.selectedChannel,
        state:{
          "city": ((_ref = $rootScope.data) !=null ? _ref.city : void 0)) || 'unknown'  },
        error: function(){
          return console.log(arguments);
        }
      });

      $rootScope.$on(PubNub.ngPrsEv($scope.selectedChannel), function(ngEvent, payload){
        return $scope.$apply(function(){
          var newData, userData;
          userData = PubNub.ngPresenceData($scope.selectedChannel);
          newData = {};
          $scope.users = PubNub.map(PubNub.ngListPresence($scope.selectedChannel), function(x) {
            var newX;
            newX = x;
            if(x.replace){
              newX = x.replace(/\w+__/, "");
            }
            if(x.uuid){
              newX = x.uuid.replace(/\w+__/, "");
            }
            newData[newX] = userData[x] || {};
            return newX;

          });
          return $scope.userData = newData;
        });
      });

      PubNub.ngHereNow({
        channel: $scope.selectedChannel
      });

      $rootScope.$on(Pubnub.ngMsgEv($scope.selectedChannel), function(ngEvent, payload){
        var msg;
        msg = payload.mmessage.user ? "[" + payload.message.user + "]" + payload.message.text
        return $scope.$apply(function(){
          return $scope.messages.unshift(msg);
        });
      });

      return PubNub.ngHistory({
        channel: $scope.selectedChannel,
        auth_key: $scopeauthKey,
        count: 500
      });
    }

      PubNub.ngSubscribe({
        channel: $scope.controlChannel
      });

      $rootScope.$on(Pubnub.ngMsgEv($scope.controlChannel), function(ngEvent, payload){
        return $scope.$apply(function(){
          if($scope.channels.indexOf(payload.message) < 0){
              return $scope.channels.push(payload.message);
          }
        });
      });

      return PubNub.ngHistory({
        channel: $scope.controlChannel,
        count: 500
      });

      $scope.newChannel = 'The waiting Room';
      return $scope.createChannel();
  }]);
