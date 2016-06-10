"use strict";

NotDolls.factory('AuthFactory', [

function () {

	let currentSong = null;

	return {
		getSong () {
			return currentSong;
		},
		setSong (song) {
			currentSong = song;
		}
	}
}
]);