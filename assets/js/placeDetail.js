import { map } from "./initMap";
import { service } from "./category";
import { clearMarker, makePlaceMarker, initMarker } from "./makeMarker";
import { removePopup } from "./makePopup";

const timeSelection = document.getElementById("timeSelection");
const setTimeBtn = document.getElementById("setTimeButton");
const detailBlock = document.getElementById("detailBlock");
const closeBtn = document.getElementById("closeButton");
const category = document.getElementById("category");

let placeInfo = [];
//place detail

export async function getPlaceDetail(temp_places) {
  let temp_placeInfo = [];

  await temp_places.forEach(function (temp_place) {
    const request = {
      placeId: temp_place.place_id,
      fields: [
        "name",
        "formatted_address",
        "formatted_phone_number",
        "geometry",
        "opening_hours",
        "rating",
        "type",
        "icon",
      ],
    };
    service.getDetails(request, function (place, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        placeInfo.push(place);
      } else {
        console.log(status);
        temp_placeInfo.push(temp_place);
      }
    });
  });

  if (temp_placeInfo.length != 0) {
    console.log("get place detail again");
    setTimeout(getPlaceDetail, 2000, temp_placeInfo);
    temp_placeInfo = [];
  }
}

function findIsOpen(periods, searchTime) {
  const currentTime = new Date();
  const dayOfWeek = currentTime.getDay();

  for (let i = 0; i < periods.length; i++) {
    //예외: 24시간 영업 시
    if (!periods[i].close) return true;
    if (periods[i].open.day == dayOfWeek) {
      let openTime = Number(periods[i].open.time);
      let closeTime = Number(periods[i].close.time);

      if (openTime > closeTime) {
        // 예외: 새벽까지 영업 시
        if (openTime <= searchTime || searchTime <= closeTime) return true;
      } else {
        if (openTime <= searchTime && searchTime <= closeTime) return true;
      }
      return false;
    }
  }
  return false;
}

function searchByTime() {
  const searchTime = Number(timeSelection.value.replace(":", ""));

  const openPlaces = placeInfo.filter((place) => {
    if (!place.opening_hours) return false;
    return findIsOpen(place.opening_hours.periods, searchTime);
  });

  placeInfo = openPlaces;
  clearMarker();
  makePlaceMarker(placeInfo);
}

export function hidePlaceDetail() {
  detailBlock.classList.add("blind");
}

// side bar에 장소 정보가 나타남
window.showPlaceDetail = function (clicked_place_name) {
  removePopup();
  category.classList.add("blind");

  placeInfo.forEach(async function (place) {
    if (clicked_place_name == place.name) {
      if (detailBlock.classList.contains("blind")) {
        detailBlock.classList.remove("blind");
      }

      document.getElementById("placeTitle").innerHTML =
        "<h1>" + place.name + "</h1>";

      document.getElementById("placeRating").innerHTML =
        "<h2><i class='fas fa-star'></i>" +
        (place.rating || "별점없음") +
        "</h2>";

      if (
        place.opening_hours.periods &&
        findIsOpen(
          place.opening_hours.periods,
          Number(getCurrentTime().replace(":", ""))
        )
      ) {
        document.getElementById("placeIsOpen").src =
          "https://place-now.s3.ap-northeast-2.amazonaws.com/logo/now_open2.png";
      }

      document.getElementById("address").innerHTML = place.formatted_address;
      document.getElementById("tel").innerHTML = place.formatted_phone_number;

      let weekday_text = "";
      if (place.opening_hours) {
        place.opening_hours.weekday_text.forEach((text) => {
          weekday_text += text + "<br>";
        });
      } else {
        weekday_text += "영업시간 정보가 없습니다😥";
      }
      document.getElementById("weekday").innerHTML = weekday_text;
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      detailBlock.classList.add("blind");
      category.classList.remove("blind");
      initMarker();
    });
  }
};

// 현재 시간 구하기
function getCurrentTime() {
  let currentTime = new Date();
  const currentMin =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  const currentHours =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  return currentHours + ":" + currentMin;
}

// time selection 현재 시간으로 setting
export function setTimeSelection() {
  timeSelection.setAttribute("value", getCurrentTime());
}

if (setTimeBtn) {
  setTimeBtn.addEventListener("click", searchByTime);
}
