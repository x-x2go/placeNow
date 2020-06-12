import { map } from "./initMap";
import { clearMarker, makePlaceMarker } from "./makeMarker";
import { getPlaceDetail, getCurrentTime } from "./placeDetail";

const searchBar = document.getElementById("searchBar");
const searchCafe = document.getElementById("cafe");
const searchRestaurants = document.getElementById("restaurants");
const searchMarket = document.getElementById("market");
const searchHospital = document.getElementById("hospital");
const openSearchBar = document.getElementById("openSearch");
const openNow = document.getElementById("openNow");

export let service;
let center;

let buttonOn = false;

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
  } else {
    alert("no results");
  }
}

function isOpen(placeType) {
  if (!buttonOn) {
    buttonOn = true;
    openNow.style.backgroundColor = "salmon";
    showOpenPlace(placeType);
    getCurrentTime();
  } else {
    buttonOn = false;
    openNow.style.backgroundColor = "#cdcdcd";
    showPlace(placeType);
  }
}

function showOpenPlace(placeType) {
  let request = {
    location: center,
    radius: "500",
    type: [placeType],
    openNow: true,
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function showPlace(placeType) {
  let request = {
    location: center,
    radius: "500",
    type: [placeType],
  };

  if (openSearchBar.classList.contains("blind")) {
    openSearchBar.classList.remove("blind");
  }

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

  openNow.addEventListener("click", function () {
    isOpen(placeType);
  });
}

function init() {
  searchCafe.addEventListener("click", function () {
    showPlace("cafe");
  });
  searchRestaurants.addEventListener("click", function () {
    showPlace("restaurant");
  });
  searchMarket.addEventListener("click", function () {
    showPlace("supermarket");
  });
  searchHospital.addEventListener("click", function () {
    showPlace("hospital");
  });
}

init();
