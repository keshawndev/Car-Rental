import MapModel from "./../models/mapModel.js";

class MapView {
  constructor() {
    this.map = null;
  }

  mapRender(location = MapModel.location, zoom = MapModel.zoom) {
    this.map = L.map(MapModel.mapId, {
      center: location,
      zoom: zoom,
    });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      minZoom: 0,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.map);
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }
}

export default new MapView();
