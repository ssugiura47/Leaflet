//   // Adding tile layer
//   var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/satellite-v9",
//     accessToken: API_KEY 
//   });
  
//   var grayscale = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "light-v10",
//     accessToken: API_KEY
//   });

//   var outdoors = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/mapbox-terrain-v2",
//     accessToken: API_KEY
//   });

//   // combining base maps
//   var baseMaps = {
//     Satellite: satellite,
//     Gray_Scale: grayscale,
//     Outdoors: outdoors
//   }
//   // overlay to hold the tectonic plates layer

//   // overlay object to hold the earthquakes layer


//   // map object and setting default layers
// var myMap = L.map("mapid",{
//   center: [46.2276, 2.2137],
//   zoom: 6,
//   layers: [satellite]
// });

// var myMap = L.map("mapid", {
//   center: [46.2276, 2.2137],
//   zoom: 6, 
// })

// // Adding tile layer
// L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//   tileSize: 512,
//   maxZoom: 18,
//   zoomOffset: -1,
//   id: "mapbox/streets-v11",
//   accessToken: API_KEY
// }).addTo(myMap);

// // Load in data
// var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"
  
//   // // Define a markerSize function that will give each city a different radius based on its population
//   function markerSize(mag) {
//     return mag * 10;
//   };

//   // // Grab data
//   d3.json(url, function(data){
//     // An array which will be used to store earthquake markers
//     var earthquake = [];
    
//     for (var i = 0; i < data.length; i++) {
//       var location = data[i].properties.mag;
      
//       if (mag) {
//         L.circle(data[i].properties.mag, {
//           fillOpacity: 0.75,
//           color: "white",
//           fillColor: "purple",
//           // Setting our circle's radius equal to the output of our markerSize function
//           // This will make our marker's size proportionate to its population
//           radius: markerSize(data[i].properties.mag)
//         }).bindPopup("<h1>" + data[i].properties.title + "</h1> <hr> <h3>Place: " + data[i].properties.place + "</h3>").addTo(myMap);
//       }
      
//     };
    
//     console.log(data)
//   });

var myMap = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 13
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

var newtry = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=1000";

d3.json(newtry, function(response) {

  console.log(response);

  for (var i = 0; i < response.length; i++) {
    var location = response[i].location;

    if (location) {
      L.marker([location.coordinates[1], location.coordinates[0]]).addTo(myMap);
    }
  }

});
