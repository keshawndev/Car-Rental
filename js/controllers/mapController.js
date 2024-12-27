import MapView from "./../views/mapView.js";

const controlMap = function () {
  MapView.mapRender();
};

const init = function () {
  MapView.addHandlerRender(controlMap);
};

init();
