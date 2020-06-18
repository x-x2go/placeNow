import { map } from "./initMap";
import { service } from "./category";
import { clearMarker, makePlaceMarker } from "./makeMarker";

const timeSelection = document.getElementById("timeSelection");
const setTimeBtn = document.getElementById("setTimeButton");

let placeInfo = [];
//place detail

export function getPlaceDetail(places) {
  let place_cnt = 0;

  places.forEach(function (place) {
    const request = {
      placeId: place.place_id,
      fields: [
        "name",
        "url",
        "formatted_address",
        "geometry",
        "opening_hours",
        "formatted_phone_number",
        "rating",
        "icon",
      ],
    };
    service.getDetails(request, function (place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        if (place.opening_hours) {
          placeInfo[place_cnt] = place;
          place_cnt++;
        }
      }
    });
  });
}

function searchByTime() {
  const searchTime = Number(timeSelection.value.replace(":", ""));
  const currentTime = new Date();
  const dayOfWeek = currentTime.getDay();

  let openPlaces = [];
  let cnt = 0;

  // Need to change simple!
  placeInfo.forEach(function (place) {
    let period;
    for (let i = 0; i < place.opening_hours.periods.length; i++) {
      period = place.opening_hours.periods[i];

      //예외: 24시간 영업 시
      if (!period.close) {
        openPlaces[cnt] = place;
        console.log(openPlaces[cnt].name);
        cnt++;

        continue;
      }

      if (period.open.day == dayOfWeek) {
        let openTime = Number(period.open.time);
        let closeTime = Number(period.close.time);

        if (openTime > closeTime) {
          // 예외: 새벽까지 영업 시
          if (openTime <= searchTime || searchTime <= closeTime) {
            openPlaces[cnt] = place;
            console.log(openPlaces[cnt].name);
            cnt++;
          }
        } else {
          if (openTime <= searchTime && searchTime <= closeTime) {
            openPlaces[cnt] = place;
            console.log(openPlaces[cnt].name);
            cnt++;
          }
        }

        break;
      }
    }
  });
  console.log(openPlaces.length);
  clearMarker();
  makePlaceMarker(openPlaces);
}

export function getCurrentTime() {
  let currentTime = new Date();
  const currentMin =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  timeSelection.setAttribute(
    "value",
    `${currentTime.getHours()}:${currentMin}`
  );
  console.log(timeSelection.value);
}

if (setTimeBtn) {
  setTimeBtn.addEventListener("click", searchByTime);
}
