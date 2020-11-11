// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 4
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Define a markerSize function that will give each city a different radius based on its population

var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"

d3.json(url, function(data) {
  var locations = [];  
  var earthquakes = data.features
  // Loop through the cities array and create one marker for each city object
  for (var i = 0; i < earthquakes.length; i++) {
    var info = earthquakes[i].properties.place
    var mag = earthquakes[i].properties.mag
    var location = earthquakes[i].geometry.coordinates
    var longitude = location[0]
    var latitude = location[1]
    var depth = location[2]
  
    if (latitude && longitude){
      markers.addLayer(L.marker([latitude, longitude])
      .bindPopup("<h1>" + info + "</h1> <hr> <h3>Magnitude: " + mag + "</h3>"));
    };
    myMap.addLayer(markers);
  };
});
  
  // for (var i = 0; i < locations.length; i++) {
  //   var magnitude = earthquakes[i].properties.mag
  //   L.circle(locations, {
  //   fillOpacity: 0.75,
  //   color: "white",
  //   fillColor: "purple",
  //   // This will make our marker's size proportionate to its magnitude
  //   radius: magnitude
  // }).addTo(myMap);
  // };
  // // }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population: " + cities[i].population + "</h3>").addTo(myMap); 
