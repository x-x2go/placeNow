import { map } from "./initMap";
import { clearMarker, makePlaceMarker } from "./makeMarker";

const input = document.getElementById("pac-input");

export function searchBox() {
  // search box를 만들고 UI element에 연결
  if (input) {
    var searchBox = new google.maps.places.SearchBox(input);
    console.log("input is define");
  } else {
    console.log("can`t find searchBox");
  }

  let center = new google.maps.LatLng(37.5780721, 126.9662221);
  // Bias the SearchBox results towards current map's viewport.
  // SearchBox 결과가 현재 맵의 viewport에 보여짐 (해당 위치로 viewport 이동)
  map.addListener("bounds_changed", function () {
    let setBounds = map.getBounds();
    let center = map.getCenter();
    searchBox.setBounds(setBounds);
  });

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  // 사용자가 장소에 대한 더 많은 정보를 얻으려 선택시, 이벤트 발생
  searchBox.addListener("places_changed", function () {
    let places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    // 예전의 marker들을 지움

    makePlaceMarker(places);
  });
}
