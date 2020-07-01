import { map } from "./initMap";

let Popup;

export function initPopup() {
  Popup = createPopupClass();
}

export function createPopup(position, content) {
  const popup = new Popup(position, content);
  popup.setMap(map);
}

function createPopupClass() {
  function Popup(position, content) {
    this.position = position;

    this.contentNode = document.createElement("div");
    this.contentNode.className = "popup_wrap";

    const popupInfo = document.createElement("div");
    popupInfo.className = "popup";
    this.contentNode.appendChild(popupInfo); // This zero-height div is positioned at the bottom of the bubble.
    popupInfo.innerHTML = content;

    const popupAnchor = document.createElement("div");
    popupAnchor.className = "popup-anchor";
    this.contentNode.appendChild(popupAnchor); // This zero-height div is positioned at the bottom of the tip.

    google.maps.OverlayView.preventMapHitsAndGesturesFrom(this.contentNode);
  }

  Popup.prototype = Object.create(google.maps.OverlayView.prototype);
  Popup.prototype.onAdd = function () {
    this.getPanes().floatPane.appendChild(this.contentNode);
  };

  Popup.prototype.onRemove = function () {
    if (this.contentNode.parentElement) {
      this.contentNode.parentElement.removeChild(this.contentNode);
    }
  };

  Popup.prototype.draw = function () {
    var divPosition = this.getProjection().fromLatLngToDivPixel(this.position); // Hide the popup when it is far out of view.

    var display =
      Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
        ? "block"
        : "none";

    if (display === "block") {
      this.contentNode.style.left = divPosition.x + "px";
      this.contentNode.style.top = divPosition.y + "px";
    }

    if (this.contentNode.style.display !== display) {
      this.contentNode.style.display = display;
    }
  };

  return Popup;
}
