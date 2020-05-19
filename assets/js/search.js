const searchCafe = document.getElementById("cafe");
const searchRestaurants = document.getElementById("restaurants");
const searchMarket = document.getElementById("market");
const searchHospital = document.getElementById("hospital");

// 임시 위치 지정
// const temp = new google.maps.LatLng(-33.8665433, 151.1956316);

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarkers(results);
    }
  }
}

function showCafe() {
  console.log("cafe");
  const temp = new google.maps.LatLng(-33.8665433, 151.1956316);
  let request = {
    location: temp,
    radius: "500",
    type: ["cafe"],
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function showRestaurant() {
  let request = {
    location: temp,
    radius: "500",
    type: ["restaurant"],
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function showMarket() {
  let request = {
    location: temp,
    radius: "500",
    type: ["supermarket"],
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function showHospital() {
  let request = {
    location: temp,
    radius: "500",
    type: ["hospital"],
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function init() {
  searchCafe.addEventListener("click", showCafe);
  searchRestaurants.addEventListener("click", showRestaurant);
  searchMarket.addEventListener("click", showMarket);
  searchHospital.addEventListener("click", showHospital);

  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.5780721, lng: 126.9662221 },
    zoom: 13,
    mapTypeId: "roadmap",
  });
}

init();
