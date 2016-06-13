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

    // Title Filter Get
    $("#title_filter").on('keyup', function() {
      var serachString = $("#title_filter").val();
      console.log('serachString', serachString);

      $http 
        .get(`http://localhost:61927/api/Home?trackName=${serachString}`)
        .success(inv => $scope.song_list = inv);

    })  
  }
]);