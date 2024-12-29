import MapModel from "./../models/mapModel.js";

class MapView {
  constructor() {
    this.map = null;
  }

  mapRender(location = MapModel.location, zoom = MapModel.zoom) {
    this.map = L.map(MapModel.mapId, {
      center: location,
      zoom: zoom,
      zoomControl: true,
      dragging: true,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      minZoom: 0,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);

    this._addLocationChangeHandler();
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler, { passive: true });
  }

  _addLocationChangeHandler() {
    const locationSelect = document.querySelector(
      ".locations__hover__box__flex__form__location-select"
    );
    locationSelect.addEventListener(
      "change",
      (event) => {
        const selectedLocation = event.target.value;
        MapModel.setView(selectedLocation, this.map);
      },
      { passive: true }
    );
  }
}

export default new MapView();
