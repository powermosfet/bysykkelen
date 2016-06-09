var ajax = require('ajax');
var config = require('config');
var loadingScreen = require('loadingScreen');
var handleBysykkelResponse = require('handleBysykkelResponse');

module.exports = function(pos) {
  pos = {
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude
  };
  console.log("handlePostition received pos: " + JSON.stringify(pos));
  
  loadingScreen.showMessage("Finner ladestasjoner");
  ajax({
    url: config.bysykkelUrl,
    method: 'POST',
    data: {
      lat: pos.latitude,
      lng: pos.longitude
    }
  }, handleBysykkelResponse(pos));
};