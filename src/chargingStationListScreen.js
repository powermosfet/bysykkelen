var UI = require('ui');
var loadingScreen = require('loadingScreen');

var chargingStationListScreen = new UI.Menu({
  backgroundColor: '#658D2E',
  highlightBackgroundColor: '#C2D100',
  highlightTextColor: 'black',
  sections: [{
    items: []
  }]
});

function stationMapper(s) {
  return { 
    title: s.name, 
    subtitle: "" + s.distance + "m, " + s.available + " ledig" + (s.available !== 1? "e":"")
  };
}

chargingStationListScreen.showChargingStations = function(chargingStations) {
  console.log("Found " + chargingStations.length + " stations: " + JSON.stringify(chargingStations));
  var listItems = chargingStations.map(stationMapper);
  
  if(listItems.length === 0) {
    listItems = [{
      title: "Beklager",
      subtitle: "Fant ingen ladestasjojner",
    }];
  }
  console.log("ListItems: " + JSON.stringify(listItems));
  
  chargingStationListScreen.items(0, listItems);
  chargingStationListScreen.show();
  loadingScreen.hide();
};

module.exports = chargingStationListScreen;