import { map } from "./initMap";

export var markers = [];

export function clearMarker() {
  markers.forEach(function (marker) {
    marker.setMap(null);
  });
  markers = [];
}
let infowindow;
export function makePlaceMarker(places) {
  let bounds = new google.maps.LatLngBounds();
  infowindow = new google.maps.InfoWindow();

  places.forEach(function (place) {
    if (!place.geometry) {
      console.log("Returned place contains no geometry");
      return;
    }

    const icon = {
      url: place.icon,
      size: new google.maps.Size(25, 25),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25),
    };

    // Create a marker for each place.
    // 각각의 장소에 marker를 생성
    let marker = new google.maps.Marker({
      map: map,
      icon: icon,
      title: place.name,
      position: place.geometry.location,
    });
    markers.push(marker);
    makeInfowindow(place);

    if (place.geometry.viewport) {
      // Only geocodes have viewport.
      bounds.union(place.geometry.viewport);
    } else {
      bounds.extend(place.geometry.location);
    }
  });

  showInfowindow();
  map.fitBounds(bounds);
}

let infowindow_contents = [];
let info_cnt = 0;

function makeInfowindow(place) {
  infowindow_contents[info_cnt] =
    "<div><div id='info_title'>" +
    place.name +
    "</div><br>" +
    place.vicinity +
    "<br>⭐" +
    place.rating +
    "</div>";
  info_cnt++;
}

function showInfowindow() {
  for (let i = 0; i < markers.length; i++) {
    google.maps.event.addListener(markers[i], "click", function () {
      if (infowindow_contents[i]) {
        infowindow.setContent(infowindow_contents[i]);
        infowindow.setPosition(markers[i].position);
        infowindow.open(map, markers[i]);
      }
    });
  }
}
