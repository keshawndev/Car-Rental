import car11 from "../../img/Home/car11.png";
import car21 from "../../img/Home/car21.png";

class HeaderSliderModel {
  constructor() {
    this.slides = {
      slide1: {
        title: "GET 15% OFF YOUR RENTAL",
        subtitle: "Plan your trip now",
        image: car11,
      },
      slide2: {
        title: "LUXURY CARS STARTING AT $28/DAY",
        subtitle: "Ride in style with us",
        image: car21,
      },
    };

    this.leftArrow = document.querySelector(
      ".banner__content__slider__icons__left-icon"
    );
    this.rightArrow = document.querySelector(
      ".banner__content__slider__icons__right-icon"
    );
  }
}

export default new HeaderSliderModel();
