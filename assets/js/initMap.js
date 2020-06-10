import { searchBox } from "./searchBox";
import { searchBtn } from "./search";

export let map;

window.initAutocomplete = function () {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.5780721, lng: 126.9662221 },
    zoom: 13,
    mapTypeId: "roadmap",
  });
  searchBox();
  searchBtn();
};
