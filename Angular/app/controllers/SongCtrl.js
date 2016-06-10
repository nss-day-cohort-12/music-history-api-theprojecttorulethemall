"use strict";

MusicHistory.controller("SongCtrl", [
 "$http",
 "$scope",
 "$location",
 

  function ($http, $scope, $location) {

    $scope.song_list = [];
    $scope.song = [];

    $http 
      .get('http://localhost:61927/api/Home')
      .success(inv => $scope.song_list = inv);
      
    $scope.details = function (id) {
      $location.path(`/song/${id}`);
    }
  }
]);