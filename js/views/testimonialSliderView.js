import testimonialSliderModel from "../models/testimonialSliderModel"; // Import the testimonial slider model

class TestimonialSliderView {
  constructor() {
    // Select the parent element where the testimonials will be rendered
    this.parentElement = document.querySelector(".testimonials");
    // Get the slides data from the model
    this.slides = testimonialSliderModel.slides;
    // Initialize the current slide index
    this.currentSlideIndex = 0;
  }

  // Render the testimonials
  render() {
    // Generate the markup for the testimonials
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
    // Insert the markup into the parent element
    this.parentElement.innerHTML = markup;
    // Add event listeners to the radio buttons
    this.addEventListeners();
    // Set a fixed height for the slides
    this.setFixedHeight();
  }

  // Generate the markup for a single slide
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

  // Change the slide based on the direction (next or previous)
  changeSlide(next = true) {
    // Get all slide elements
    const slides = document.querySelectorAll(".testimonials__box__slide");
    // Calculate the new slide index
    const newIndex = this.currentSlideIndex + (next ? 1 : -1);

    // Check if the new index is within bounds
    if (newIndex >= 0 && newIndex < slides.length) {
      // Remove the 'current' class from the current slide
      slides[this.currentSlideIndex].classList.remove("current");
      // Add the 'slide-out-left' or 'slide-out-right' class to the current slide
      slides[this.currentSlideIndex].classList.add(
        next ? "slide-out-left" : "slide-out-right"
      );
      // Remove the 'hidden' class from the new slide
      slides[newIndex].classList.remove("hidden");
      // Add the 'current' and 'slide-in-right' or 'slide-in-left' class to the new slide
      slides[newIndex].classList.add(
        "current",
        next ? "slide-in-right" : "slide-in-left"
      );
      // After 500ms, remove the 'slide-out-left' or 'slide-out-right' class from the current slide
      setTimeout(() => {
        slides[this.currentSlideIndex].classList.remove(
          next ? "slide-out-left" : "slide-out-right"
        );
        // Add the 'hidden' class to the current slide
        slides[this.currentSlideIndex].classList.add("hidden");
        // Remove the 'slide-in-right' or 'slide-in-left' class from the new slide
        slides[newIndex].classList.remove(
          next ? "slide-in-right" : "slide-in-left"
        );
        // Update the current slide index
        this.currentSlideIndex = newIndex;
        // Update the radio buttons to reflect the current slide
        this.updateRadioButtons(newIndex);
      }, 500);
    }
  }

  // Add event listeners to the radio buttons
  addEventListeners() {
    // Select all radio button inputs
    const radioButtons = document.querySelectorAll(
      ".testimonials__box__radio-buttons input"
    );

    // Add click event listeners to each radio button
    radioButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        // Go to the slide corresponding to the clicked radio button
        this.goToSlide(index);
      });
    });
  }

  // Go to a specific slide based on the index
  goToSlide(index) {
    // Get all slide elements
    const slides = document.querySelectorAll(".testimonials__box__slide");

    // Check if the index is within bounds
    if (index >= 0 && index < slides.length) {
      // Determine the direction of the slide change
      const next = index > this.currentSlideIndex;
      // Remove the 'current' class from the current slide
      slides[this.currentSlideIndex].classList.remove("current");
      // Add the 'slide-out-left' or 'slide-out-right' class to the current slide
      slides[this.currentSlideIndex].classList.add(
        next ? "slide-out-left" : "slide-out-right"
      );
      // Remove the 'hidden' class from the new slide
      slides[index].classList.remove("hidden");
      // Add the 'current' and 'slide-in-right' or 'slide-in-left' class to the new slide
      slides[index].classList.add(
        "current",
        next ? "slide-in-right" : "slide-in-left"
      );
      // After 500ms, remove the 'slide-out-left' or 'slide-out-right' class from the current slide
      setTimeout(() => {
        slides[this.currentSlideIndex].classList.remove(
          next ? "slide-out-left" : "slide-out-right"
        );
        // Add the 'hidden' class to the current slide
        slides[this.currentSlideIndex].classList.add("hidden");
        // Remove the 'slide-in-right' or 'slide-in-left' class from the new slide
        slides[index].classList.remove(
          next ? "slide-in-right" : "slide-in-left"
        );
        // Update the current slide index
        this.currentSlideIndex = index;
        // Update the radio buttons to reflect the current slide
        this.updateRadioButtons(index);
      }, 500);
    }
  }

  // Update the radio buttons to reflect the current slide
  updateRadioButtons(index) {
    // Select all radio button inputs
    const radioButtons = document.querySelectorAll(
      ".testimonials__box__radio-buttons input"
    );

    // Update the checked property of each radio button
    radioButtons.forEach((button, i) => {
      button.checked = i === index;
    });
  }

  // Set a fixed height for all slides based on the tallest slide
  setFixedHeight() {
    // Select all slide elements
    const slides = document.querySelectorAll(".testimonials__box__slide");
    // Initialize the maximum height variable
    let maxHeight = 0;

    // Calculate the maximum height of all slides
    slides.forEach((slide) => {
      const slideHeight = slide.offsetHeight;
      if (slideHeight > maxHeight) {
        maxHeight = slideHeight + 15;
      }
    });

    // Set the height of all slides to the maximum height
    slides.forEach((slide) => {
      slide.style.height = `${maxHeight}px`;
    });
  }
}

export default new TestimonialSliderView(); // Export an instance of the TestimonialSliderView class
