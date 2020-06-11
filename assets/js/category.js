import { map } from "./initMap";
import { clearMarker, makePlaceMarker } from "./makeMarker";
import { getPlaceDetail } from "./placeDetail";

const searchBar = document.getElementById("searchBar");
const searchCafe = document.getElementById("cafe");
const searchRestaurants = document.getElementById("restaurants");
const searchMarket = document.getElementById("market");
const searchHospital = document.getElementById("hospital");

export let service;
var bounds;
let center;

export function searchBtn() {
  if (searchBar) {
    console.log("searchBar is define");

    center = new google.maps.LatLng(37.5780721, 126.9662221);
    map.addListener("center_changed", function () {
      center = map.getCenter();
    });
  }
}

function callback(results, status) {
  clearMarker();

  if (status == google.maps.places.PlacesServiceStatus.OK) {
    makePlaceMarker(results);
    getPlaceDetail(results);
    map.fitBounds(bounds);
  } else {
    alert("no results");
  }
}

function showCafe() {
  console.log("cafe");
  let request = {
    location: center,
    radius: "500",
    type: ["cafe"],
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function showRestaurant() {
  let request = {
    location: center,
    radius: "500",
    type: ["restaurant"],
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function showMarket() {
  let request = {
    location: center,
    radius: "500",
    type: ["supermarket"],
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function showHospital() {
  let request = {
    location: center,
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
