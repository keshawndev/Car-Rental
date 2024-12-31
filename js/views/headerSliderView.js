import headerSliderModel from "../models/headerSliderModel.js";

// Define a class to represent the header slider view
class HeaderSliderView {
  constructor() {
    this.parentElement = document.querySelector(".banner__content__slider");
    this.slides = headerSliderModel.slides;
    this.currentSlideIndex = 0;
  }

  render() {
    const markup = `
      <div class="banner__content__slider__slides">
        ${this._generateSlideMarkup(this.slides.slide1, true)}
        ${this._generateSlideMarkup(this.slides.slide2)}
      </div>
      <div class="banner__content__slider__icons">
        <ion-icon name="chevron-back-outline" class="banner__content__slider__icons__left-icon"></ion-icon>
        <ion-icon name="chevron-forward-outline" class="banner__content__slider__icons__right-icon"></ion-icon>
      </div>
    `;
    this.parentElement.innerHTML = markup;
    this.addEventListeners();
  }

  _generateSlideMarkup(slide, isCurrent = false) {
    return `
      <div class="banner__content__slider__slides__slide ${
        isCurrent ? "current-slide" : "hidden"
      }">
        <div class="banner__content__slider__slides__slide__content">
          <h2 class="banner__content__slider__slides__slide__content__title">${
            slide.title
          }</h2>
          <p class="banner__content__slider__slides__slide__content__subtitle">${
            slide.subtitle
          }</p>
        </div>
        <img src="${
          slide.image
        }" alt="Car" class="banner__content__slider__slides__slide__image" />
      </div>
    `;
  }

  nextSlide() {
    const slides = document.querySelectorAll(
      ".banner__content__slider__slides__slide"
    );
    if (this.currentSlideIndex < slides.length - 1) {
      const currentSlide = slides[this.currentSlideIndex];
      const nextSlide = slides[this.currentSlideIndex + 1];
      currentSlide.classList.remove("current-slide");
      currentSlide.classList.add("slide-out-left");
      nextSlide.classList.remove("hidden");
      nextSlide.classList.add("current-slide", "slide-in-right");
      setTimeout(() => {
        currentSlide.classList.remove("slide-out-left");
        currentSlide.classList.add("hidden");
        nextSlide.classList.remove("slide-in-right");
      }, 500);
      this.currentSlideIndex++;
    }
  }

  previousSlide() {
    const slides = document.querySelectorAll(
      ".banner__content__slider__slides__slide"
    );
    if (this.currentSlideIndex > 0) {
      const currentSlide = slides[this.currentSlideIndex];
      const previousSlide = slides[this.currentSlideIndex - 1];
      currentSlide.classList.remove("current-slide");
      currentSlide.classList.add("slide-out-right");
      previousSlide.classList.remove("hidden");
      previousSlide.classList.add("current-slide", "slide-in-left");
      setTimeout(() => {
        currentSlide.classList.remove("slide-out-right");
        currentSlide.classList.add("hidden");
        previousSlide.classList.remove("slide-in-left");
      }, 500);
      this.currentSlideIndex--;
    }
  }

  addEventListeners() {
    const leftArrow = document.querySelector(
      ".banner__content__slider__icons__left-icon"
    );
    const rightArrow = document.querySelector(
      ".banner__content__slider__icons__right-icon"
    );

    leftArrow.addEventListener("click", this.previousSlide.bind(this));
    rightArrow.addEventListener("click", this.nextSlide.bind(this));
  }
}

// Export the HeaderSliderView class
export default new HeaderSliderView();
