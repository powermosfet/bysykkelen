/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
var handlePosition = require('handlePosition');
var loadingScreen = require('loadingScreen');

loadingScreen.showMessage('Finner posisjon');

navigator.geolocation.getCurrentPosition(handlePosition);
