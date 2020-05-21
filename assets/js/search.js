import makePlaceMarker from "./map";
import map from "./map";

const searchCafe = document.getElementById("cafe");
const searchRestaurants = document.getElementById("restaurants");
const searchMarket = document.getElementById("market");
const searchHospital = document.getElementById("hospital");

let service;

// 임시 위치 지정
// const temp = new google.maps.LatLng(-33.8665433, 151.1956316);

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      console.log(result[i] + " ");
      makePlaceMarker(results[i]);
    }
  }
  console.log("not ok?");
}

function showCafe() {
  let temp = new google.maps.LatLng(-33.8665433, 151.1956316);
  console.log("cafe");
  // let request = {
  //   location: temp,
  //   radius: "500",
  //   type: ["cafe"],
  // };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(
    { location: temp, radius: 500, type: ["store"] },
    function (results, status) {
      console.log("not ok?");
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          console.log(result[i] + " ");
          makePlaceMarker(results[i]);
        }
      } else {
        alert("no results");
      }
    }
  );
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
}

init();
