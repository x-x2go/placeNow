/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/styles.css":
/*!*******************************!*\
  !*** ./assets/css/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./assets/css/styles.css?");

/***/ }),

/***/ "./assets/js/category.js":
/*!*******************************!*\
  !*** ./assets/js/category.js ***!
  \*******************************/
/*! exports provided: service, searchBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"service\", function() { return service; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchBtn\", function() { return searchBtn; });\n/* harmony import */ var _initMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initMap */ \"./assets/js/initMap.js\");\n/* harmony import */ var _makeMarker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeMarker */ \"./assets/js/makeMarker.js\");\n/* harmony import */ var _placeDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeDetail */ \"./assets/js/placeDetail.js\");\n\n\n\nvar searchBar = document.getElementById(\"searchBar\");\nvar searchCafe = document.getElementById(\"cafe\");\nvar searchRestaurants = document.getElementById(\"restaurants\");\nvar searchMarket = document.getElementById(\"market\");\nvar searchHospital = document.getElementById(\"hospital\");\nvar openSearchBar = document.getElementById(\"searchDetail\");\nvar openNow = document.getElementById(\"openNow\");\nvar searchAgain = document.getElementById(\"searchAgain\");\nvar closeBtn = document.getElementById(\"closeAll\");\nvar service;\nvar center;\nvar openNow_buttonOn = false;\nfunction searchBtn() {\n  if (searchBar) {\n    console.log(\"searchBar is define\");\n    init();\n    center = new google.maps.LatLng(37.5780721, 126.9662221);\n    _initMap__WEBPACK_IMPORTED_MODULE_0__[\"map\"].addListener(\"center_changed\", function () {\n      center = _initMap__WEBPACK_IMPORTED_MODULE_0__[\"map\"].getCenter();\n    });\n  }\n}\n\nfunction callback(results, status) {\n  Object(_makeMarker__WEBPACK_IMPORTED_MODULE_1__[\"clearMarker\"])();\n\n  if (status == google.maps.places.PlacesServiceStatus.OK) {\n    Object(_makeMarker__WEBPACK_IMPORTED_MODULE_1__[\"makePlaceMarker\"])(results);\n    Object(_placeDetail__WEBPACK_IMPORTED_MODULE_2__[\"getPlaceDetail\"])(results);\n  } else {\n    console.log(status);\n    alert(\"no results\");\n  }\n}\n\nfunction isOpen(placeType) {\n  if (!openNow_buttonOn) {\n    openNow_buttonOn = true;\n    openNow.style.backgroundColor = \"salmon\";\n    showOpenPlace(placeType);\n    Object(_placeDetail__WEBPACK_IMPORTED_MODULE_2__[\"getCurrentTime\"])();\n  } else {\n    openNow_buttonOn = false;\n    openNow.style.backgroundColor = \"#cdcdcd\";\n    showPlace(placeType);\n  }\n}\n\nfunction showOpenPlace(placeType) {\n  var request = {\n    location: center,\n    radius: \"500\",\n    type: [placeType],\n    openNow: true\n  };\n  service.nearbySearch(request, callback);\n}\n\nfunction closeAll() {\n  openSearchBar.classList.add(\"blind\");\n  Object(_makeMarker__WEBPACK_IMPORTED_MODULE_1__[\"clearMarker\"])();\n}\n\nfunction showPlace(placeType) {\n  var request = {\n    location: center,\n    radius: \"500\",\n    type: [placeType]\n  };\n\n  if (openSearchBar.classList.contains(\"blind\")) {\n    openSearchBar.classList.remove(\"blind\");\n  }\n\n  service.nearbySearch(request, callback);\n  openNow.addEventListener(\"click\", function () {\n    isOpen(placeType);\n  });\n  searchAgain.addEventListener(\"click\", function () {\n    if (openNow_buttonOn) {\n      showOpenPlace(placeType);\n    } else {\n      showPlace(placeType);\n    }\n  });\n  closeBtn.addEventListener(\"click\", closeAll);\n}\n\nfunction init() {\n  service = new google.maps.places.PlacesService(_initMap__WEBPACK_IMPORTED_MODULE_0__[\"map\"]);\n  searchCafe.addEventListener(\"click\", function () {\n    showPlace(\"cafe\");\n  });\n  searchRestaurants.addEventListener(\"click\", function () {\n    showPlace(\"restaurant\");\n  });\n  searchMarket.addEventListener(\"click\", function () {\n    showPlace(\"supermarket\");\n  });\n  searchHospital.addEventListener(\"click\", function () {\n    showPlace(\"hospital\");\n  });\n}\n\n//# sourceURL=webpack:///./assets/js/category.js?");

/***/ }),

/***/ "./assets/js/initMap.js":
/*!******************************!*\
  !*** ./assets/js/initMap.js ***!
  \******************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony import */ var _searchBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchBox */ \"./assets/js/searchBox.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ \"./assets/js/category.js\");\n\n\nvar map;\n\nwindow.initAutocomplete = function () {\n  map = new google.maps.Map(document.getElementById(\"map\"), {\n    center: {\n      lat: 37.5780721,\n      lng: 126.9662221\n    },\n    zoom: 13,\n    mapTypeId: \"roadmap\"\n  });\n  Object(_searchBox__WEBPACK_IMPORTED_MODULE_0__[\"searchBox\"])();\n  Object(_category__WEBPACK_IMPORTED_MODULE_1__[\"searchBtn\"])();\n};\n\n//# sourceURL=webpack:///./assets/js/initMap.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./assets/css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _initMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initMap */ \"./assets/js/initMap.js\");\n/* harmony import */ var _searchBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchBox */ \"./assets/js/searchBox.js\");\n/* harmony import */ var _makeMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./makeMarker */ \"./assets/js/makeMarker.js\");\n/* harmony import */ var _placeDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placeDetail */ \"./assets/js/placeDetail.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category */ \"./assets/js/category.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ "./assets/js/makeMarker.js":
/*!*********************************!*\
  !*** ./assets/js/makeMarker.js ***!
  \*********************************/
/*! exports provided: markers, clearMarker, makePlaceMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"markers\", function() { return markers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearMarker\", function() { return clearMarker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makePlaceMarker\", function() { return makePlaceMarker; });\n/* harmony import */ var _initMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initMap */ \"./assets/js/initMap.js\");\n/* harmony import */ var _placeDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeDetail */ \"./assets/js/placeDetail.js\");\n\n\nvar markers = [];\nvar infowindow_contents = [];\nfunction clearMarker() {\n  markers.forEach(function (marker) {\n    marker.setMap(null);\n  });\n  markers = [];\n}\nvar infowindow;\nfunction makePlaceMarker(places) {\n  var bounds = new google.maps.LatLngBounds();\n  infowindow = new google.maps.InfoWindow();\n  infowindow_contents = [];\n  console.log(\"places길이: \" + places.length);\n  console.log(\"초반marker길이: \" + markers.length);\n  places.forEach(function (place) {\n    if (!place.geometry) {\n      console.log(\"Returned place contains no geometry\");\n      return;\n    }\n\n    var icon = {\n      url: place.icon,\n      size: new google.maps.Size(25, 25),\n      origin: new google.maps.Point(0, 0),\n      anchor: new google.maps.Point(17, 34),\n      scaledSize: new google.maps.Size(25, 25)\n    }; // Create a marker for each place.\n    // 각각의 장소에 marker를 생성\n\n    var marker = new google.maps.Marker({\n      map: _initMap__WEBPACK_IMPORTED_MODULE_0__[\"map\"],\n      icon: icon,\n      title: place.name,\n      position: place.geometry.location\n    });\n    markers.push(marker);\n    makeInfowindow(place);\n    console.log(\"marker길이: \" + markers.length);\n\n    if (place.geometry.viewport) {\n      // Only geocodes have viewport.\n      bounds.union(place.geometry.viewport);\n    } else {\n      bounds.extend(place.geometry.location);\n    }\n  });\n  showInfowindow(markers);\n  _initMap__WEBPACK_IMPORTED_MODULE_0__[\"map\"].fitBounds(bounds);\n}\n\nfunction makeInfowindow(place) {\n  var rating = \"별점 없음\";\n\n  if (place.rating) {\n    rating = place.rating;\n  }\n\n  var temp_content = \"<div><div id='info_title'>\" + place.name + \"</div><br>\" + place.vicinity + \"<br>⭐\" + rating + \"</div>\";\n  infowindow_contents.push(temp_content);\n}\n\nfunction showInfowindow(markers) {\n  var _loop = function _loop(i) {\n    google.maps.event.addListener(markers[i], \"click\", function () {\n      if (infowindow_contents[i]) {\n        infowindow.setContent(infowindow_contents[i]);\n        infowindow.setPosition(markers[i].position);\n        infowindow.open(_initMap__WEBPACK_IMPORTED_MODULE_0__[\"map\"], markers[i]);\n      }\n    });\n  };\n\n  for (var i = 0; i < markers.length; i++) {\n    _loop(i);\n  }\n}\n\n//# sourceURL=webpack:///./assets/js/makeMarker.js?");

/***/ }),

/***/ "./assets/js/placeDetail.js":
/*!**********************************!*\
  !*** ./assets/js/placeDetail.js ***!
  \**********************************/
/*! exports provided: getPlaceDetail, getCurrentTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPlaceDetail\", function() { return getPlaceDetail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentTime\", function() { return getCurrentTime; });\n/* harmony import */ var _initMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initMap */ \"./assets/js/initMap.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ \"./assets/js/category.js\");\n/* harmony import */ var _makeMarker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeMarker */ \"./assets/js/makeMarker.js\");\n\n\n\nvar timeSelection = document.getElementById(\"timeSelection\");\nvar setTimeBtn = document.getElementById(\"setTimeButton\");\nvar placeInfo = []; //place detail\n\nfunction getPlaceDetail(places) {\n  placeInfo = [];\n  places.forEach(function (place) {\n    var request = {\n      placeId: place.place_id,\n      fields: [\"name\", \"formatted_address\", \"formatted_phone_number\", \"geometry\", \"opening_hours\", \"rating\", \"icon\"]\n    };\n    _category__WEBPACK_IMPORTED_MODULE_1__[\"service\"].getDetails(request, function (place, status) {\n      if (status === google.maps.places.PlacesServiceStatus.OK) {\n        // if (place.opening_hours) {\n        placeInfo.push(place); //}\n      }\n    });\n  });\n}\n\nfunction searchByTime() {\n  var searchTime = Number(timeSelection.value.replace(\":\", \"\"));\n  var currentTime = new Date();\n  var dayOfWeek = currentTime.getDay();\n  var openPlaces = [];\n  var cnt = 0; // Need to change simple!\n\n  placeInfo.forEach(function (place) {\n    var period;\n\n    for (var i = 0; i < place.opening_hours.periods.length; i++) {\n      period = place.opening_hours.periods[i]; //예외: 24시간 영업 시\n\n      if (!period.close) {\n        openPlaces[cnt] = place;\n        cnt++;\n        continue;\n      }\n\n      if (period.open.day == dayOfWeek) {\n        var openTime = Number(period.open.time);\n        var closeTime = Number(period.close.time);\n\n        if (openTime > closeTime) {\n          // 예외: 새벽까지 영업 시\n          if (openTime <= searchTime || searchTime <= closeTime) {\n            openPlaces[cnt] = place;\n            cnt++;\n          }\n        } else {\n          if (openTime <= searchTime && searchTime <= closeTime) {\n            openPlaces[cnt] = place;\n            cnt++;\n          }\n        }\n\n        break;\n      }\n    }\n  });\n  Object(_makeMarker__WEBPACK_IMPORTED_MODULE_2__[\"clearMarker\"])();\n  Object(_makeMarker__WEBPACK_IMPORTED_MODULE_2__[\"makePlaceMarker\"])(openPlaces);\n}\n\nfunction getCurrentTime() {\n  var currentTime = new Date();\n  var currentMin = (currentTime.getMinutes() < 10 ? \"0\" : \"\") + currentTime.getMinutes();\n  timeSelection.setAttribute(\"value\", \"\".concat(currentTime.getHours(), \":\").concat(currentMin));\n}\n\nif (setTimeBtn) {\n  setTimeBtn.addEventListener(\"click\", searchByTime);\n}\n\n//# sourceURL=webpack:///./assets/js/placeDetail.js?");

/***/ }),

/***/ "./assets/js/searchBox.js":
/*!********************************!*\
  !*** ./assets/js/searchBox.js ***!
  \********************************/
/*! exports provided: searchBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchBox\", function() { return searchBox; });\n/* harmony import */ var _initMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initMap */ \"./assets/js/initMap.js\");\n/* harmony import */ var _makeMarker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeMarker */ \"./assets/js/makeMarker.js\");\n\n\nvar input = document.getElementById(\"pac-input\");\nfunction searchBox() {\n  // search box를 만들고 UI element에 연결\n  if (input) {\n    var searchBox = new google.maps.places.SearchBox(input);\n    console.log(\"input is define\");\n  } else {\n    console.log(\"can`t find searchBox\");\n  }\n\n  var center = new google.maps.LatLng(37.5780721, 126.9662221); // Bias the SearchBox results towards current map's viewport.\n  // SearchBox 결과가 현재 맵의 viewport에 보여짐 (해당 위치로 viewport 이동)\n\n  _initMap__WEBPACK_IMPORTED_MODULE_0__[\"map\"].addListener(\"bounds_changed\", function () {\n    var setBounds = _initMap__WEBPACK_IMPORTED_MODULE_0__[\"map\"].getBounds();\n    var center = _initMap__WEBPACK_IMPORTED_MODULE_0__[\"map\"].getCenter();\n    searchBox.setBounds(setBounds);\n  }); // Listen for the event fired when the user selects a prediction and retrieve\n  // more details for that place.\n  // 사용자가 장소에 대한 더 많은 정보를 얻으려 선택시, 이벤트 발생\n\n  searchBox.addListener(\"places_changed\", function () {\n    var places = searchBox.getPlaces();\n\n    if (places.length == 0) {\n      return;\n    } // Clear out the old markers.\n    // 예전의 marker들을 지움\n\n\n    Object(_makeMarker__WEBPACK_IMPORTED_MODULE_1__[\"makePlaceMarker\"])(places);\n  });\n}\n\n//# sourceURL=webpack:///./assets/js/searchBox.js?");

/***/ })

/******/ });