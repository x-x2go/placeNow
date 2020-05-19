export function makePlaceMarker(place) {
  if (!place.geometry) {
    console.log("Returned place contains no geometry");
    return;
  }
  var icon = {
    url: place.icon,
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(25, 25),
  };

  // Create a marker for each place.
  // 각각의 장소에 marker를 생성
  markers.push(
    new google.maps.Marker({
      map: map,
      icon: icon,
      title: place.name,
      position: place.geometry.location,
    })
  );

  if (place.geometry.viewport) {
    // Only geocodes have viewport.
    bounds.union(place.geometry.viewport);
  } else {
    bounds.extend(place.geometry.location);
  }
}

function showPlace() {
  var places = searchBox.getPlaces();

  if (places.length == 0) {
    return;
  }

  // Clear out the old markers.
  // 예전의 marker들을 지움
  markers.forEach(function (marker) {
    marker.setMap(null);
  });
  markers = [];

  var bounds = new google.maps.LatLngBounds();

  markers.forEach(makePlaceMarker(place));
  map.fitBounds(bounds);
}
window.initAutocomplete = function () {
  export var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.5780721, lng: 126.9662221 },
    zoom: 13,
    mapTypeId: "roadmap",
  });

  // search box를 만들고 UI element에 연결
  var input = document.getElementById("pac-input");
  var searchBox = new google.maps.places.SearchBox(input);
  //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  // SearchBox 결과가 현재 맵의 viewport에 보여짐 (해당 위치로 viewport 이동)
  map.addListener("bounds_changed", function () {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  // 사용자가 장소에 대한 더 많은 정보를 얻으려 선택시, 이벤트 발생
  searchBox.addListener("places_changed", showPlace());

  //place detail
  var request = {
    placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4",
    fields: ["name", "formatted_address", "place_id", "geometry"],
  };

  var infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);

  service.getDetails(request, function (place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
      });
      google.maps.event.addListener(marker, "click", function () {
        infowindow.setContent(
          "<div><strong>" +
            place.name +
            "</strong><br>" +
            "Place ID: " +
            place.place_id +
            "<br>" +
            place.formatted_address +
            "</div>"
        );
        infowindow.open(map, this);
      });
    }
  });
};
