import testimonialSliderView from "../views/testimonialSliderView";

const controlTestimonialSlider = function () {
  testimonialSliderView.render();
  testimonialSliderView.addEventListeners();
};

const init = function () {
  controlTestimonialSlider();
};

init();
