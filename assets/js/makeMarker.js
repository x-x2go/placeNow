import { map } from "./initMap";
import { showPlaceDetail, hidePlaceDetail } from "./placeDetail";
import { Popup, createPopup, removePopup } from "./makePopup";

export var markers = [];
let infowindow_contents = [];

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

  infowindow_contents = [];

  console.log("makePlaceMarker: " + places.length);
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

  showInfowindow(markers);
  map.fitBounds(bounds);
}

function makeInfowindow(place) {
  let rating = "별점 없음";
  if (place.rating) {
    rating = place.rating;
  }

  let vicinity = place.vicinity;
  if (!place.vicinity) {
    vicinity = place.formatted_address;
  }
  const temp_content =
    "<div id='infoTitle' class='info_title'><div class='place_name'>" +
    place.name +
    "</div><div class='more_detail' onclick='showPlaceDetail(\"" +
    place.name +
    "\")'>&#62;</div></div><div class='info_rest'>" +
    vicinity +
    "<br>⭐" +
    rating +
    "</div>";
  infowindow_contents.push(temp_content);
}

function showInfowindow(markers) {
  for (let i = 0; i < markers.length; i++) {
    google.maps.event.addListener(markers[i], "click", async function () {
      if (infowindow_contents[i]) {
        // infowindow.setContent(infowindow_contents[i]);
        // infowindow.setPosition(markers[i].position);
        // await infowindow.open(map, markers[i]);
        await removePopup();
        await createPopup(markers[i].position, infowindow_contents[i]);

        const moreDetail = document.getElementById("moreDetail");
        console.log(moreDetail);
        if (moreDetail) {
          console.log("moreDetai is define");
          moreDetail.addEventListener("click", function () {
            console.log("click");
            showPlaceDetail(markers[i].title);
          });
        }

        console.log("marker: " + markers[i].title);
      }
    });
  }
}
