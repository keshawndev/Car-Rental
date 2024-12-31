import fleetModel from "../models/fleetModel.js";

class FleetView {
  constructor() {
    this.parentElement = document.querySelector(".our-fleet");
  }

  renderList() {
    const fleetData = fleetModel.carModels;
    const markup = `
     <p class="our-fleet__title">
      Vehicle Models - Our rental fleet at a glance
     </p>
    <div class="our-fleet__selection-box">
      <ul class="our-fleet__selection-box__cars-list">
        ${fleetData
          .map(
            (car, index) => `
        <li class="our-fleet__selection-box__cars-list__item ${
          index === 0 ? "active" : ""
        }">
        <p class="our-fleet__selection-box__cars-list__item__text">
          ${car}
        </p>
        </li>
        `
          )
          .join("")}
      </ul>
    </div>`;
    this.parentElement.innerHTML = markup;
  }

  _selectCar() {
    this.parentElement.addEventListener("click", function (e) {
      const car = e.target.closest(
        ".our-fleet__selection-box__cars-list__item"
      );
      car.classList.toggle("active");

      const allCars = document.querySelectorAll(
        ".our-fleet__selection-box__cars-list__item"
      );
      allCars.forEach((item) => {
        if (item !== car) {
          item.classList.remove("active");
        }
      });

      if (car) {
        const carName = car.querySelector(
          ".our-fleet__selection-box__cars-list__item__text"
        ).textContent;
        renderCarDetails(carName);
      }
    });
  }
}

export default new FleetView();
