import { map } from "./initMap";
import { service } from "./category";
import { clearMarker, makePlaceMarker } from "./makeMarker";

const timeSelection = document.getElementById("timeSelection");
const setTimeBtn = document.getElementById("setTimeButton");
const detailBlock = document.getElementById("placeDetail");

let placeInfo = [];
//place detail

function getDetail(temp_places) {
  temp_places.forEach(function (place) {
    const request = {
      placeId: place.place_id,
      fields: [
        "name",
        "formatted_address",
        "formatted_phone_number",
        "geometry",
        "opening_hours",
        "rating",
        "icon",
      ],
    };
    service.getDetails(request, function (place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        placeInfo.push(place);
      } else {
        console.log(status);
      }
    });
  });
}

export function getPlaceDetail(places) {
  placeInfo = [];

  //avoid google OVER_QUERY_LIMIT
  getDetail(places.slice(0, 9));
  for (let i = 1; i < Math.round(places.length / 10); i++) {
    setTimeout(getDetail, 4000 * i, places.slice(10 * i, 10 * (i + 1) - 1));
  }
}

function searchByTime() {
  const searchTime = Number(timeSelection.value.replace(":", ""));
  const currentTime = new Date();
  const dayOfWeek = currentTime.getDay();

  let openPlaces = [];

  // Need to change simple!
  placeInfo.forEach(function (place) {
    let period;

    /*****/
    if (!place.opening_hours) return;

    for (let i = 0; i < place.opening_hours.periods.length; i++) {
      period = place.opening_hours.periods[i];

      //예외: 24시간 영업 시
      if (!period.close) {
        openPlaces.push(place);

        continue;
      }

      if (period.open.day == dayOfWeek) {
        let openTime = Number(period.open.time);
        let closeTime = Number(period.close.time);

        if (openTime > closeTime) {
          // 예외: 새벽까지 영업 시
          if (openTime <= searchTime || searchTime <= closeTime) {
            openPlaces.push(place);
          }
        } else {
          if (openTime <= searchTime && searchTime <= closeTime) {
            openPlaces.push(place);
          }
        }
      }
    }
  });

  placeInfo = openPlaces;
  clearMarker();
  makePlaceMarker(placeInfo);
}

export function hidePlaceDetail() {
  detailBlock.classList.add("blind");
}

export function showPlaceDetail(clicked_place_name) {
  placeInfo.forEach(async function (place) {
    console.log(place.name);

    if (clicked_place_name == place.name) {
      if (detailBlock.classList.contains("blind")) {
        detailBlock.classList.remove("blind");
      }

      document.getElementById("placeTitle").innerHTML =
        "<h1>" + place.name + "</h1>";

      if (place.rating) {
        document.getElementById("placeRating").innerHTML =
          "<h2>⭐" + place.rating + "</h2>";
      } else {
        document.getElementById("placeRating").innerHTML =
          "<h2>⭐별점없음</h2>";
      }

      if (place.opening_hours.open_now != undefined) {
        if (place.opening_hours.open_now) {
          document.getElementById("placeIsOpen").innerHTML = "영업중";
        } else {
          document.getElementById("placeIsOpen").innerHTML = "영업종료";
        }
      }

      document.getElementById("address").innerHTML = place.formatted_address;
      document.getElementById("tel").innerHTML = place.formatted_phone_number;

      let weekday_text = "";
      if (place.opening_hours) {
        for (let i = 0; i < place.opening_hours.weekday_text.length; i++) {
          weekday_text += place.opening_hours.weekday_text[i] + "<br>";
        }
      } else {
        weekday_text += "영업시간 정보가 없습니다😥";
      }
      document.getElementById("weekday").innerHTML = weekday_text;
    }
  });
}

export function getCurrentTime() {
  let currentTime = new Date();
  const currentMin =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  const currentHours =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  timeSelection.setAttribute("value", `${currentHours}:${currentMin}`);
}

if (setTimeBtn) {
  setTimeBtn.addEventListener("click", searchByTime);
}
