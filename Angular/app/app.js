"use strict";

/* exported MusicHistory */

let MusicHistory = angular.module("SongApp", ["ngRoute"])

/*
  Define a promise for any view that needs an authenticated user
  before it will resolve (see below)
 */
let isAuth = (authFactory) => new Promise((resolve, reject) => {
  if (authFactory.isAuthenticated()) {
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
});

/*
  Set up routes for Music History app
 */
MusicHistory.config(["$routeProvider",
  function ($routeProvider) {
    $routeProvider.
      when("/", {
        templateUrl: "partials/song-list.html",
        controller: "SongCtrl",
        // resolve: { isAuth }
      }).
      // when("/song", {
      //   templateUrl: "partials/song.html",
      //   controller: "SongDetailCtrl",
      //   // resolve: { isAuth }
      // }).
      otherwise({
        redirectTo: "/"
      });
  }]);

/*
  When the application first loads, redirect the user to the login
  form if there is no authentication
 */
