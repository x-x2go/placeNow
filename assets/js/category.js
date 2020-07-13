import { map } from "./initMap";
import { clearMarker, makePlaceMarker } from "./makeMarker";
import { getPlaceDetail, getCurrentTime } from "./placeDetail";

const searchBar = document.getElementById("searchBar");
const searchCafe = document.getElementById("cafe");
const searchRestaurants = document.getElementById("restaurants");
const searchBakery = document.getElementById("bakery");
const searchMarket = document.getElementById("market");
const searchShoppingMall = document.getElementById("shopping_mall");
const searchHospital = document.getElementById("hospital");
const searchPharmacy = document.getElementById("pharmacy");
const searchBank = document.getElementById("bank");
const openSearchBar = document.getElementById("searchDetail");
const openNow = document.getElementById("openNow");
const searchAgain = document.getElementById("searchAgain");
const closeBtn = document.getElementById("closeAll");

export let service;
let center;

let openNow_buttonOn = false;

export function searchBtn() {
  if (searchBar) {
    init();

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
    console.log(status);
    alert("no results");
  }
}

function isOpen(placeType) {
  if (!openNow_buttonOn) {
    openNow_buttonOn = true;
    openNow.style.backgroundColor = "#FF6E6E";
    showOpenPlace(placeType);
    getCurrentTime();
  } else {
    openNow_buttonOn = false;
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

  service.nearbySearch(request, callback);
}

function closeAll() {
  openSearchBar.classList.add("blind");
  clearMarker();
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

  service.nearbySearch(request, callback);

  openNow.addEventListener("click", function () {
    isOpen(placeType);
  });

  searchAgain.addEventListener("click", function () {
    if (openNow_buttonOn) {
      showOpenPlace(placeType);
    } else {
      showPlace(placeType);
    }
  });

  closeBtn.addEventListener("click", closeAll);
}

function init() {
  service = new google.maps.places.PlacesService(map);

  searchCafe.addEventListener("click", function () {
    showPlace("cafe");
  });
  searchRestaurants.addEventListener("click", function () {
    showPlace("restaurant");
  });
  searchBakery.addEventListener("click", function () {
    showPlace("bakery");
  });
  searchMarket.addEventListener("click", function () {
    showPlace("supermarket");
  });
  searchShoppingMall.addEventListener("click", function () {
    showPlace("shopping_mall");
  });
  searchHospital.addEventListener("click", function () {
    showPlace("hospital");
  });
  searchPharmacy.addEventListener("click", function () {
    showPlace("pharmacy");
  });
  searchMarket.addEventListener("click", function () {
    showPlace("bank");
  });
}
