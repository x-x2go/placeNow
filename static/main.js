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

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./assets/css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ \"./assets/js/map.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_map__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ \"./assets/js/search.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_search__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ "./assets/js/map.js":
/*!**************************!*\
  !*** ./assets/js/map.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function makePlaceMarker(place) {\n  if (!place.geometry) {\n    console.log(\"Returned place contains no geometry\");\n    return;\n  }\n\n  var icon = {\n    url: place.icon,\n    size: new google.maps.Size(71, 71),\n    origin: new google.maps.Point(0, 0),\n    anchor: new google.maps.Point(17, 34),\n    scaledSize: new google.maps.Size(25, 25)\n  }; // Create a marker for each place.\n  // 각각의 장소에 marker를 생성\n\n  markers.push(new google.maps.Marker({\n    map: map,\n    icon: icon,\n    title: place.name,\n    position: place.geometry.location\n  }));\n\n  if (place.geometry.viewport) {\n    // Only geocodes have viewport.\n    bounds.union(place.geometry.viewport);\n  } else {\n    bounds.extend(place.geometry.location);\n  }\n}\n\nfunction showPlace() {\n  var places = searchBox.getPlaces();\n\n  if (places.length == 0) {\n    return;\n  } // Clear out the old markers.\n  // 예전의 marker들을 지움\n\n\n  markers.forEach(function (marker) {\n    marker.setMap(null);\n  });\n  markers = [];\n  var bounds = new google.maps.LatLngBounds();\n  markers.forEach(makePlaceMarker(place));\n  map.fitBounds(bounds);\n}\n\nfunction initAutocomplete() {\n  var map = new google.maps.Map(document.getElementById(\"map\"), {\n    center: {\n      lat: 37.5780721,\n      lng: 126.9662221\n    },\n    zoom: 13,\n    mapTypeId: \"roadmap\"\n  }); // search box를 만들고 UI element에 연결\n\n  var input = document.getElementById(\"pac-input\");\n  var searchBox = new google.maps.places.SearchBox(input); //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);\n  // Bias the SearchBox results towards current map's viewport.\n  // SearchBox 결과가 현재 맵의 viewport에 보여짐 (해당 위치로 viewport 이동)\n\n  map.addListener(\"bounds_changed\", function () {\n    searchBox.setBounds(map.getBounds());\n  });\n  var markers = []; // Listen for the event fired when the user selects a prediction and retrieve\n  // more details for that place.\n  // 사용자가 장소에 대한 더 많은 정보를 얻으려 선택시, 이벤트 발생\n\n  searchBox.addListener(\"places_changed\", showPlace()); //place detail\n\n  var request = {\n    placeId: \"ChIJN1t_tDeuEmsRUsoyG83frY4\",\n    fields: [\"name\", \"formatted_address\", \"place_id\", \"geometry\"]\n  };\n  var infowindow = new google.maps.InfoWindow();\n  var service = new google.maps.places.PlacesService(map);\n  service.getDetails(request, function (place, status) {\n    if (status === google.maps.places.PlacesServiceStatus.OK) {\n      var marker = new google.maps.Marker({\n        map: map,\n        position: place.geometry.location\n      });\n      google.maps.event.addListener(marker, \"click\", function () {\n        infowindow.setContent(\"<div><strong>\" + place.name + \"</strong><br>\" + \"Place ID: \" + place.place_id + \"<br>\" + place.formatted_address + \"</div>\");\n        infowindow.open(map, this);\n      });\n    }\n  });\n}\n\n//# sourceURL=webpack:///./assets/js/map.js?");

/***/ }),

/***/ "./assets/js/search.js":
/*!*****************************!*\
  !*** ./assets/js/search.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var searchCafe = document.getElementById(\"cafe\");\nvar searchRestaurants = document.getElementById(\"restaurants\");\nvar searchMarket = document.getElementById(\"market\");\nvar searchHospital = document.getElementById(\"hospital\"); // 임시 위치 지정\n// const temp = new google.maps.LatLng(-33.8665433, 151.1956316);\n\nfunction callback(results, status) {\n  if (status == google.maps.places.PlacesServiceStatus.OK) {\n    for (var i = 0; i < results.length; i++) {\n      var place = results[i];\n      createMarkers(results);\n    }\n  }\n}\n\nfunction showCafe() {\n  console.log(\"cafe\");\n  var temp = new google.maps.LatLng(-33.8665433, 151.1956316);\n  var request = {\n    location: temp,\n    radius: \"500\",\n    type: [\"cafe\"]\n  };\n  service = new google.maps.places.PlacesService(map);\n  service.nearbySearch(request, callback);\n}\n\nfunction showRestaurant() {\n  var request = {\n    location: temp,\n    radius: \"500\",\n    type: [\"restaurant\"]\n  };\n  service = new google.maps.places.PlacesService(map);\n  service.nearbySearch(request, callback);\n}\n\nfunction showMarket() {\n  var request = {\n    location: temp,\n    radius: \"500\",\n    type: [\"supermarket\"]\n  };\n  service = new google.maps.places.PlacesService(map);\n  service.nearbySearch(request, callback);\n}\n\nfunction showHospital() {\n  var request = {\n    location: temp,\n    radius: \"500\",\n    type: [\"hospital\"]\n  };\n  service = new google.maps.places.PlacesService(map);\n  service.nearbySearch(request, callback);\n}\n\nfunction init() {\n  searchCafe.addEventListener(\"click\", showCafe);\n  searchRestaurants.addEventListener(\"click\", showRestaurant);\n  searchMarket.addEventListener(\"click\", showMarket);\n  searchHospital.addEventListener(\"click\", showHospital);\n  var map = new google.maps.Map(document.getElementById(\"map\"), {\n    center: {\n      lat: 37.5780721,\n      lng: 126.9662221\n    },\n    zoom: 13,\n    mapTypeId: \"roadmap\"\n  });\n}\n\ninit();\n\n//# sourceURL=webpack:///./assets/js/search.js?");

/***/ })

/******/ });