"use strict";

MusicHistory.controller('SongDetailCtrl', [
	'$http', 
	'$scope',
	'$routeParams',

	function ($http, $scope, $routeParams) {
		$scope.songid = $routeParams.id;
		$scope.song = [];

			$http({
				url:`http://localhost:61927/api/Home/${$routeParams.id}`,
				method: 'GET',
				data: JSON.stringify($scope.song)
			})
			.success(newFigurine => console.log('201 Created', newFigurine))
		}

]);