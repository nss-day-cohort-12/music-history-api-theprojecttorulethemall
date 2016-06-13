"use strict";

MusicHistory.controller('SongDetailCtrl', [
	'$http', 
	'$scope',
	'$routeParams',

	function ($http, $scope, $routeParams) {
		$scope.song = [];

			$http
				.get(`http://localhost:61927/api/Home/${$routeParams.id}`)
				.success(song => $scope.song = song);
		}
]);


