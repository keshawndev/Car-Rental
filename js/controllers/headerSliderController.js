import headerSliderView from "../views/headerSliderView";

const controlHeaderSlider = function () {
  headerSliderView.render();
  headerSliderView.addEventListeners();
};

const init = function () {
  controlHeaderSlider();
};

init();
