var markers = [];

export function makePlaceMarker(place) {
  console.log(place);
  if (!place.geometry) {
    console.log("Returned place contains no geometry");
    return;
  }
  const icon = {
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
}
