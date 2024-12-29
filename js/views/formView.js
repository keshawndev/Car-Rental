// Import the form model to access data
import formModel from "../models/formModel.js";

// Define a class to represent the form view
class FormView {
  constructor() {
    // Select the parent element where the form will be rendered
    this.parentElement = document.querySelector(
      ".banner__content__reservation"
    );
  }

  // Method to render the form
  render() {
    const markup = `
      <form action="#" class="banner__content__reservation__form">
        ${this._generateErrorMessageMarkup()}
        ${this._generateCarTypeSelectMarkup()}
        ${this._generatePickUpLocationMarkup()}
        ${this._generateDropOffLocationMarkup()}
        ${this._generatePickUpDateMarkup()}
        ${this._generateDropOffDateMarkup()}
        ${this._generateSubmitButtonMarkup()}
      </form>
    `;
    // Insert the generated markup into the parent element
    this.parentElement.innerHTML = markup;
  }

  // Method to generate markup for the error message
  _generateErrorMessageMarkup() {
    return `
      <div class="banner__content__reservation__form__error-message hidden">
        <p class="banner__content__reservation__form__error-message__text">All fields required!</p>
        <ion-icon name="close-outline" class="banner__content__reservation__form__error-message__icon"></ion-icon>
      </div>
    `;
  }

  // Method to generate markup for the car type select element
  _generateCarTypeSelectMarkup() {
    return `
      <select class="banner__content__reservation__form__select-car-type" name="options-car-type" required>
        <option value="" disabled selected>Select Your Car Type</option>
        ${formModel.carTypes
          .map((carType) => `<option value="${carType}">${carType}</option>`)
          .join("")}
      </select>
    `;
  }

  // Method to generate markup for the pick-up location
  _generatePickUpLocationMarkup() {
    return `
      <div class="banner__content__reservation__form__pick-up-location">
        <label for="pick-up-location" class="banner__content__reservation__form__pick-up-location__label">
          <ion-icon name="location-sharp" class="banner__content__reservation__form__pick-up-location__label__icon"></ion-icon>Pick-up
        </label>
        <select name="pick-up-location" class="banner__content__reservation__form__pick-up-location__select" required>
          ${formModel.locations
            .map(
              (location) => `<option value="${location}">${location}</option>`
            )
            .join("")}
        </select>
      </div>
    `;
  }

  // Method to generate markup for the drop-off location
  _generateDropOffLocationMarkup() {
    return `
      <div class="banner__content__reservation__form__drop-off-location">
        <label for="drop-off-location" class="banner__content__reservation__form__drop-off-location__label">
          <ion-icon name="location-sharp" class="banner__content__reservation__form__drop-off-location__label__icon"></ion-icon>Drop-off
        </label>
        <select name="drop-off-location" class="banner__content__reservation__form__drop-off-location__select" required>
          ${formModel.locations
            .map(
              (location) => `<option value="${location}">${location}</option>`
            )
            .join("")}
        </select>
      </div>
    `;
  }

  // Method to generate markup for the pick-up date
  _generatePickUpDateMarkup() {
    return `
      <div class="banner__content__reservation__form__pick-up-date">
        <div class="banner__content__reservation__form__pick-up-date__day">
          <label for="pick-up-date" class="banner__content__reservation__form__pick-up-date__day__label">
            <ion-icon name="calendar" class="banner__content__reservation__form__pick-up-date__day__label__icon"></ion-icon>
            <span class="banner__content__reservation__form__pick-up-date__day__label__text">Pick-up</span>
          </label>
          <input type="date" name="pick-up-date" class="banner__content__reservation__form__pick-up-date__day__selector" required />
        </div>
        <select name="pick-up-time-slot" class="banner__content__reservation__form__pick-up-date__time-slot" required>
          ${formModel.timeSlots
            .map(
              (timeSlot) => `<option value="${timeSlot}">${timeSlot}</option>`
            )
            .join("")}
        </select>
      </div>
    `;
  }

  // Method to generate markup for the drop-off date
  _generateDropOffDateMarkup() {
    return `
      <div class="banner__content__reservation__form__drop-off-date">
        <div class="banner__content__reservation__form__drop-off-date__day">
          <label for="drop-off-date" class="banner__content__reservation__form__drop-off-date__day__label">
            <ion-icon name="calendar" class="banner__content__reservation__form__drop-off-date__day__label__icon"></ion-icon>
            <span class="banner__content__reservation__form__drop-off-date__day__label__text">Drop-off</span>
          </label>
          <input type="date" name="drop-off-date" class="banner__content__reservation__form__drop-off-date__day__selector" required />
        </div>
        <select name="drop-off-time-slot" class="banner__content__reservation__form__drop-off-date__time-slot" required>
          ${formModel.timeSlots
            .map(
              (timeSlot) => `<option value="${timeSlot}">${timeSlot}</option>`
            )
            .join("")}
        </select>
      </div>
    `;
  }

  // Method to generate markup for the submit button
  _generateSubmitButtonMarkup() {
    return `
      <input type="submit" value="CONTINUE CAR RESERVATION" class="banner__content__reservation__form__submit" />
    `;
  }
}

// Export an instance of the FormView class
export default new FormView();
