import fleetModel from "../models/fleetModel.js";

class FleetView {
  constructor() {
    this.parentElement = document.querySelector(".our-fleet");
    this.subparentElement = document.querySelector(".our-fleet__selection-box");
    this.data = fleetModel.fleet;
  }

  renderCarSelection(car = "car1") {
    const carListMarkup = Object.values(this.data)
      .map(
        (car, index) => `
          <li class="our-fleet__selection-box__cars-list__item" data-car="car${
            index + 1
          }">
            <p class="our-fleet__selection-box__cars-list__item__text">
              ${car.name}
            </p>
          </li>
        `
      )
      .join("");

    const selectedCar = this.data[car];

    const markup = `
     <p class="our-fleet__title">
        Vehicle Models - Our rental fleet at a glance
      </p>

      <div class="our-fleet__selection-box">
        <ul class="our-fleet__selection-box__cars-list">
          ${carListMarkup}
        </ul>
      
    
    
            <img
              src=${selectedCar.image}
              alt="car"
              class="our-fleet__selection-box__img"
            />

            <div class="our-fleet__selection-box__reserve-box">
              <table
                class="our-fleet__selection-box__reserve-box__table"
              >
                <tr
                  class="our-fleet__selection-box__reserve-box__table__tr-1"
                >
                  <th
                    colspan="2"
                    class="our-fleet__selection-box__reserve-box__table__tr-1__rent-th"
                  >
                    <span
                      class="our-fleet__selection-box__reserve-box__table__tr-1__rent-th__price"
                      >${selectedCar.price}</span
                    >
                    rent per day
                  </th>
                </tr>
                <tr
                  class="our-fleet__selection-box__reserve-box__table__tr-2-7"
                >
                  <td
                    class="our-fleet__selection-box__reserve-box__table__tr-2-7__td"
                  >
                    Model
                  </td>
                  <td
                    class="our-fleet__selection-box__reserve-box__table__tr-2-7__td"
                  >
                  ${selectedCar.make}
                  </td>
                </tr>
                <tr
                  class="our-fleet__selection-box__reserve-box__table__tr-2-7"
                >
                  <td
                    class="our-fleet__selection-box__reserve-box__table__tr-2-7__td"
                  >
                    Doors
                  </td>
                  <td
                    class="our-fleet__selection-box__reserve-box__table__tr-2-7__td"
                  >
                  ${selectedCar.doors}
                  </td>
                </tr>
                <tr
                  class="our-fleet__selection-box__reserve-box__table__tr-2-7"
                >
                  <td
                    class="our-fleet__selection-box__reserve-box__table__tr-2-7__td"
                  >
                    Seats
                  </td>
                  <td
                    class="our-fleet__selection-box__reserve-box__table__tr-2-7__td"
                  >
                  ${selectedCar.seats}
                  </td>
                </tr>
                <tr
                  class="our-fleet__selection-box__reserve-box__table__tr-2-7"
                >
                  <td
                    class="our-fleet__selection-box__reserve-box__table__tr-2-7__td"
                  >
                    Luggage
                  </td>
                  <td
                    class="our-fleet__selection-box__reserve-box__table__tr-2-7__td"
                  >
                  ${selectedCar.lugguage}
                  </td>
                </tr>
                <tr
                  class="our-fleet__selection-box__reserve-box__table__tr-2-7"
                >
                  <td
                    class="our-fleet__selection-box__reserve-box__table__tr-2-7__td"
                  >
                    Transmission
                  </td>
                  <td
                    class="our-fleet__selection-box__reserve-box__table__tr-2-7__td"
                  >
                     ${selectedCar.transmission}
                  </td>
                </tr>
                <tr
                  class="our-fleet__selection-box__reserve-box__table__tr-2-7"
                >
                  <td
                    class="our-fleet__selection-box__reserve-box__table__tr-2-7__td"
                  >
                    Air conditioning
                  </td>
                  <td
                    class="our-fleet__selection-box__reserve-box__table__tr-2-7__td"
                  >
                     ${selectedCar.airConditioning}
                  </td>
                </tr>
                <tr
                  class="our-fleet__selection-box__reserve-box__table__tr-2-7"
                >
                  <td
                    class="our-fleet__selection-box__reserve-box__table__tr-2-7__td"
                  >
                    Minimum age
                  </td>
                  <td
                    class="our-fleet__selection-box__reserve-box__table__tr-2-7__td"
                  >
                     ${selectedCar.minimumAge} years
                  </td>
                </tr>
              </table>

              <button
                class="our-fleet__selection-box__reserve-box__reservation-btn"
              >
                <ion-icon
                  name="calendar"
                  class="our-fleet__selection-box__reserve-box__reservation-btn__icon"
                ></ion-icon>
                <p
                  class="our-fleet__selection-box__reserve-box__reservation-btn__text"
                >
                  RESERVE NOW
                </p>
              </button>
            </div>
          </div>
     
   `;
    this.parentElement.insertAdjacentHTML("beforeend", markup);
  }

  addCarSelectionHandler() {
    this.parentElement.addEventListener("click", (event) => {
      const carItem = event.target.closest(
        ".our-fleet__selection-box__cars-list__item"
      );
      if (!carItem) return;

      const selectedCar = carItem.dataset.car;
      this.parentElement.innerHTML = "";
      this.renderCarSelection(selectedCar);
    });
  }
}

export default new FleetView();
