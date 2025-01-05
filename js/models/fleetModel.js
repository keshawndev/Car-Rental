import vehicle1 from "../../img/Home/vehicle1.jpg";
import vehicle2 from "../../img/Home/vehicle2.jpg";
import vehicle3 from "../../img/Home/vehicle3.jpg";
import vehicle4 from "../../img/Home/vehicle4.jpg";
import vehicle5 from "../../img/Home/vehicle5.jpg";
import vehicle6 from "../../img/Home/vehicle6.jpg";

class FleetModel {
  constructor() {
    this.fleet = {
      car1: {
        price: "37.40",
        make: "Volkswagen",
        name: "VW Golf VII",
        doors: 4,
        seats: 5,
        lugguage: "2 Suitcases, 2 Bags",
        transmission: "Automatic",
        airConditioning: "Yes",
        minimumAge: 25,
        image: vehicle1,
      },
      car2: {
        price: "47.50",
        make: "Audi",
        name: "Audi A1 S-LINE",
        doors: 4,
        seats: 5,
        lugguage: "2 Suitcases, 2 Bags",
        transmission: "Automatic",
        airConditioning: "Yes",
        minimumAge: 25,
        image: vehicle2,
      },
      car3: {
        price: "50.40",
        make: "Toyota",
        name: "Toyota Camry",
        doors: 4,
        seats: 5,
        lugguage: "2 Suitcases, 2 Bags",
        transmission: "Automatic",
        airConditioning: "Yes",
        minimumAge: 25,
        image: vehicle3,
      },
      car4: {
        price: "37.40",
        make: "BMW",
        name: "BMW 320 ModernLine",
        doors: 4,
        seats: 5,
        lugguage: "2 Suitcases, 2 Bags",
        transmission: "Automatic",
        airConditioning: "Yes",
        minimumAge: 25,
        image: vehicle4,
      },
      car5: {
        price: "80.40",
        make: "Mercedes",
        name: "Mercedes-Benz GLK",
        doors: 4,
        seats: 5,
        lugguage: "2 Suitcases, 2 Bags",
        transmission: "Automatic",
        airConditioning: "Yes",
        minimumAge: 25,
        image: vehicle5,
      },
      car6: {
        price: "75.40",
        make: "Volkswagen",
        name: "VW Passat CC",
        doors: 4,
        seats: 5,
        lugguage: "2 Suitcases, 2 Bags",
        transmission: "Automatic",
        airConditioning: "Yes",
        minimumAge: 25,
        image: vehicle6,
      },
    };
  }

  getFleetCarNames() {
    console.log(this.fleet.map((car) => this.fleet[car].name));
  }
}

export default new FleetModel();
