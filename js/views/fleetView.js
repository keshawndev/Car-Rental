import fleetModel from "../models/fleetModel.js";

class FleetView {
  constructor() {
    this.parentElement = document.querySelector(".our-fleet");
    this.data = fleetModel.fleet;
    this.currentCar = "car1"; // Initialize state
    this.init();

    // Bind event handlers
    this.handleCarSelection = this.handleCarSelection.bind(this);
  }

  async init() {
    await this.renderCarSelection();
    this.addCarSelectionHandler();
  }

  async renderCarSelection() {
    const carListMarkup = Object.values(this.data)
      .map(
        (car, index) => `
          <li class="our-fleet__selection-box__cars-list__item ${
            `car${index + 1}` === this.currentCar ? "active" : ""
          }" data-car="car${index + 1}">
            <p class="our-fleet__selection-box__cars-list__item__text">
              ${car.name}
            </p>
          </li>
        `
      )
      .join("");

    const selectedCar = this.data[this.currentCar];

    const markup = `
      <p class="our-fleet__title">
        Vehicle Models - Our rental fleet at a glance
      </p>
      <div class="our-fleet__selection-box">
        <ul class="our-fleet__selection-box__cars-list">
          ${carListMarkup}
        </ul>
        <img src="${
          selectedCar.image
        }" alt="car" class="our-fleet__selection-box__img" />
        <div class="our-fleet__selection-box__reserve-box">
          <table class="our-fleet__selection-box__reserve-box__table">
            <tr class="our-fleet__selection-box__reserve-box__table__tr-1">
              <th colspan="2" class="our-fleet__selection-box__reserve-box__table__tr-1__rent-th">
                <span class="our-fleet__selection-box__reserve-box__table__tr-1__rent-th__price">
                  $${selectedCar.price}
                </span>
                rent per day
              </th>
            </tr>
            ${this.generateCarDetails(selectedCar)}
          </table>
          <button class="our-fleet__selection-box__reserve-box__reservation-btn">
            <ion-icon name="calendar" class="our-fleet__selection-box__reserve-box__reservation-btn__icon"></ion-icon>
            <p class="our-fleet__selection-box__reserve-box__reservation-btn__text">RESERVE NOW</p>
          </button>
        </div>
      </div>
    `;

    this.parentElement.innerHTML = markup;

    // Add fade-in effect after a short delay
    await new Promise((resolve) => setTimeout(resolve, 0));
    this.addFadeInEffect();
    this.addCarSelectionHandler(); // Re-attach event listeners after rendering
  }

  generateCarDetails(car) {
    const details = [
      { label: "Model", value: car.make },
      { label: "Doors", value: car.doors },
      { label: "Seats", value: car.seats },
      { label: "Luggage", value: car.lugguage },
      { label: "Transmission", value: car.transmission },
      { label: "Air conditioning", value: car.airConditioning },
      { label: "Minimum age", value: `${car.minimumAge} years` },
    ];

    return details
      .map(
        (detail) => `
          <tr class="our-fleet__selection-box__reserve-box__table__tr-2-7">
            <td class="our-fleet__selection-box__reserve-box__table__tr-2-7__td">
              ${detail.label}
            </td>
            <td class="our-fleet__selection-box__reserve-box__table__tr-2-7__td">
              ${detail.value}
            </td>
          </tr>
        `
      )
      .join("");
  }

  addFadeInEffect() {
    const imgElement = this.parentElement.querySelector(
      ".our-fleet__selection-box__img"
    );
    const reserveBoxElement = this.parentElement.querySelector(
      ".our-fleet__selection-box__reserve-box"
    );

    imgElement.classList.add("fade-in");
    reserveBoxElement.classList.add("fade-in");
  }

  async handleCarSelection(event) {
    const carItem = event.target.closest(
      ".our-fleet__selection-box__cars-list__item"
    );
    if (!carItem || carItem.classList.contains("active")) return;

    // Update active class
    this.parentElement
      .querySelectorAll(".our-fleet__selection-box__cars-list__item")
      .forEach((item) => {
        item.classList.remove("active");
      });
    carItem.classList.add("active");

    this.currentCar = carItem.dataset.car; // Update state
    await this.renderCarSelection(); // Re-render view
  }

  addCarSelectionHandler() {
    this.parentElement
      .querySelectorAll(".our-fleet__selection-box__cars-list__item")
      .forEach((item) => {
        item.addEventListener("click", this.handleCarSelection);
      });
  }
}

export default new FleetView();
