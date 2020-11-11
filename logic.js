// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 3
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
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
    var location = earthquakes[i].geometry.coordinates
    var longitude = earthquakes[i].geometry.coordinates[0]
    var latitude = earthquakes[i].geometry.coordinates[1]
  
 
    if (latitude && longitude){
      locations.push([latitude, longitude])
    };

  };
  console.log(locations)
  for (var i = 0; i < locations.length; i++) {
    var magnitude = earthquakes[i].properties.mag
    L.circle(locations, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",
    // This will make our marker's size proportionate to its magnitude
    radius: magnitude
  }).addTo(myMap);
  };
  // }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population: " + cities[i].population + "</h3>").addTo(myMap); 
  
});
    // var heatArray = [];
  
    // for (var i = 0; i < response.length; i++) {
    //   var location = response[i].location;
  
    //   if (location) {
    //     heatArray.push([location.coordinates[1], location.coordinates[0]]);
    //   }
    // }
  
    // var heat = L.heatLayer(heatArray, {
    //   radius: 20,
    //   blur: 35
    // }).addTo(myMap);
  
  // });