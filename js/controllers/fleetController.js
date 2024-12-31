import fleetView from "../views/fleetView.js";

const controlFleet = function () {
  fleetView.renderList();
  fleetView._selectCar();
};

const init = function () {
  controlFleet();
};

init();
