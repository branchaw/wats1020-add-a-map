/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.*/

$(document).ready(function() {
  
 //$('.carousel').carousel({
  //interval: 2000
  // })
  
  // Inside of your on ready handler, invoke the Leaflet.js library to draw a map in your `#map-container` div.
  
  var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
  var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

  // Add 2 layers to your map you have visuals. Use the Open Street Maps tiles served through the MapQuest CDN.
  
  var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
      subdomains: ['otile1','otile2','otile3','otile4']
  });

  var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
      subdomains: ['otile1','otile2','otile3','otile4']
  });

  var mapLayers = {
      "Satellite": satLayer,
      "Map View": drawLayer,
      "Open Street Maps": osm
  }

  var map = L.map('map-container').setView([46.852, -121.760], 10);

  L.control.layers(mapLayers).addTo(map);
  satLayer.addTo(map);
  
  // Customize that Map to show markers with popups at no fewer than 3 interesting locations. 

  var planes = [
    ["<b>Welcome to Mt. Rainier!</b><br>This peak is 4,392 feet high.",46.852034,-121.7607924],
    ["Paradise, WA",46.274,-121.456],
    ["Point Success!",46.8161732,-121.7107251],
		["Gibraltor Rock",46.8520505,-121.7658379],
		["Anvil Rock",46.8538086,-121.7938437]
  ];
// Added popups to markers.
	
  for (var i = 0; i < planes.length; i++) {
			marker = new L.marker([planes[i][1],planes[i][2]])
				.bindPopup(planes[i][0])
				.addTo(map);
		}
  
  
});


