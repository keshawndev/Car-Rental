import testimonialSliderModel from "../models/testimonialSliderModel";

class TestimonialSliderView {
  constructor() {
    this.parentElement = document.querySelector(".testimonials");
    this.slides = testimonialSliderModel.slides;
    this.currentSlideIndex = 0;
  }

  render() {
    const markup = `
      <div class="testimonials__box">
        ${Object.values(this.slides)
          .map((slide, index) => this._generateSlideMarkup(slide, index === 0))
          .join("")}
        <div class="testimonials__box__radio-buttons">
          ${Object.keys(this.slides)
            .map(
              (slide, index) => `
            <input type="radio" id="radio-${index}" name="testimonials__box__radio-buttons__input" />
            <label for="radio-${index}"></label>
          `
            )
            .join("")}
        </div>
      </div>
    `;
    this.parentElement.innerHTML = markup;
    this.addEventListeners();
    this.setFixedHeight();
  }

  _generateSlideMarkup(slide, isCurrent = false) {
    return `
      <div class="testimonials__box__slide ${isCurrent ? "current" : "hidden"}">
        <div class="testimonials__box__slide__stars">
          ${[...Array(5)]
            .map(
              (_, i) => `
        <div>
          <ion-icon
            name="star"
            class="testimonials__box__slide__stars__${
              i === 2 ? "inside" : "outside"
            }-icon"
          ></ion-icon>
        </div>
        `
            )
            .join("")}
        </div>
        <div class="testimonials__box__slide__comment">
          <p class="testimonials__box__slide__comment__text">${slide.text}</p>
          <p class="testimonials__box__slide__comment__name">
            - ${slide.name}, ${slide.location}
          </p>
        </div>
      </div>
    `;
  }

  changeSlide(index) {
    const slides = document.querySelectorAll(".testimonials__box__slide");

    if (index >= 0 && index < slides.length) {
      const next = index > this.currentSlideIndex;
      slides[this.currentSlideIndex].classList.remove("current");
      slides[this.currentSlideIndex].classList.add(
        next ? "slide-out-left" : "slide-out-right"
      );
      slides[index].classList.remove("hidden");
      slides[index].classList.add(
        "current",
        next ? "slide-in-right" : "slide-in-left"
      );
      setTimeout(() => {
        slides[this.currentSlideIndex].classList.remove(
          next ? "slide-out-left" : "slide-out-right"
        );
        slides[this.currentSlideIndex].classList.add("hidden");
        slides[index].classList.remove(
          next ? "slide-in-right" : "slide-in-left"
        );
        this.currentSlideIndex = index;
        this.updateRadioButtons(index);
      }, 500);
    }
  }

  addEventListeners() {
    const radioButtons = document.querySelectorAll(
      ".testimonials__box__radio-buttons input"
    );

    radioButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        this.changeSlide(index);
      });
    });
  }

  updateRadioButtons(index) {
    const radioButtons = document.querySelectorAll(
      ".testimonials__box__radio-buttons input"
    );

    radioButtons.forEach((button, i) => {
      button.checked = i === index;
    });
  }

  setFixedHeight() {
    const slides = document.querySelectorAll(".testimonials__box__slide");
    let maxHeight = 0;

    slides.forEach((slide) => {
      const slideHeight = slide.offsetHeight;
      if (slideHeight > maxHeight) {
        maxHeight = slideHeight + 15;
      }
    });

    slides.forEach((slide) => {
      slide.style.height = `${maxHeight}px`;
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const testimonialSliderView = new TestimonialSliderView();
  testimonialSliderView.render();
});

export default new TestimonialSliderView();
