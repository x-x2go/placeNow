import { map } from "./initMap";
import { service } from "./category";

//place detail
export function getPlaceDetail(places) {
  const infowindow = new google.maps.InfoWindow();
  // var service = new google.maps.places.PlacesService(map);
  places.forEach(function (place) {
    const request = {
      placeId: place.place_id,
      fields: ["name", "formatted_address", "geometry", "opening_hours"],
    };
    service.getDetails(request, function (place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(place.opening_hours);
      }
    });
  });
}
