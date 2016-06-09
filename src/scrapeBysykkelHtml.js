var $ = require('jquery');
var geolib = require('geolib');

function extractCoords(div) {
  var regexResult = /&center=([^&]*)/.exec(div.attr('style'));
  var components = [0, 0];
  if(regexResult) {
    components = regexResult[1].split(',').map(parseFloat);  
  }
  return {
    latitude: components[0],
    longitude: components[1]
  };
}

module.exports = function(html, pos) {
  console.log("scrapeBysykkelHtml received pos: " + JSON.stringify(pos));
  return $.makeArray($(html).find(".station-basicinfo").map(function(){
    return {
      name: $(this).find(".station-title").text(),
      available: parseInt($(this).find(".station-availablebikes").text(), 10),
      distance: geolib.getDistance(pos, extractCoords($(this).find('div[style*="url("]')))
    };
  })); 
};