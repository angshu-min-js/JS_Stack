var app = angular.module('Meetups',['ngResource']);

app.controller('meetupsController',[
'$scope','$resource',
function($scope, $resource){
	//$scope.meetupsCount = 10;
	var Meetup= $resource('/api/meetups');
	Meetup.query(function(results){
		$scope.meetups= results;
	});
	$scope.meetups = []


	$scope.createMeetup = function(){
		//if(!$scope.meetups || $scope.meetups==='') {return }
		var meetup = new Meetup();
		meetup.name= $scope.meetupName;
		meetup.$save(function(result){
			$scope.meetups.push(result);
			$scope.meetupName='';
		});
	}
}
	]);
	