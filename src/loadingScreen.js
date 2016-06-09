var UI = require('ui');
var config = require('config');

var loadingScreen = new UI.Card({
  backgroundColor: config.backgroundColor,
  title: "Vent...",
  subtitle: "henter lokasjon",
});

loadingScreen.showMessage = function(message) {
  loadingScreen.subtitle(message);
  loadingScreen.backgroundColor(config.backgroundColor);
  loadingScreen.show();
};

module.exports = loadingScreen;