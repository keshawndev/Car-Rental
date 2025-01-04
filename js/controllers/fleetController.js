import fleetView from "../views/fleetView.js";

const controlFleet = function () {
  fleetView.renderCarSelection();
  fleetView.addCarSelectionHandler();
};

const init = function () {
  controlFleet();
};

init();
