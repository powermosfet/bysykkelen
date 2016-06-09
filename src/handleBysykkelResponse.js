var Vibe = require('ui/vibe');
var Light = require('ui/light');
var scrapeBysykkelHtml = require('scrapeBysykkelHtml');

var chargingStationListScreen = require('chargingStationListScreen');

module.exports = function(pos) {
  console.log("handleBysykkelResponse received pos: " + JSON.stringify(pos));
  return function(data, status, req) {
    console.log("Handling bysykkelen.no response...");
    console.log("Status: " + status);
    Vibe.vibrate('short');  
    Light.trigger();
    
    if(status === 200) {
      chargingStationListScreen.showChargingStations(scrapeBysykkelHtml(data, pos));
    }
  };};