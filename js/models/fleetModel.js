import vehicle1 from "../../img/Home/vehicle1.jpg";
import vehicle2 from "../../img/Home/vehicle2.jpg";
import vehicle3 from "../../img/Home/vehicle3.jpg";
import vehicle4 from "../../img/Home/vehicle4.jpg";
import vehicle5 from "../../img/Home/vehicle5.jpg";
import vehicle6 from "../../img/Home/vehicle6.jpg";

class FleetModel {
  //
  constructor() {
    this.fleet = {
      car1: {
        price: 37.4,
        make: "Volkswagen",
        model: "VW Golf VII",
        doors: 4,
        seats: 5,
        lugguage: "2 Suitcases, 2 Bags",
        transmission: "Automatic",
        airConditioning: "Yes",
        minimumAge: 25,
        image: vehicle1,
      },
      car2: {
        price: 47.5,
        make: "Audi",
        model: "A1 S-LINE",
        doors: 4,
        seats: 5,
        lugguage: "2 Suitcases, 2 Bags",
        transmission: "Automatic",
        airConditioning: "Yes",
        minimumAge: 25,
        image: vehicle2,
      },
      car3: {
        price: 50.4,
        make: "Toyota",
        model: "Camry",
        doors: 4,
        seats: 5,
        lugguage: "2 Suitcases, 2 Bags",
        transmission: "Automatic",
        airConditioning: "Yes",
        minimumAge: 25,
        image: vehicle3,
      },
      car4: {
        price: 37.4,
        make: "BMW",
        model: "320 ModernLinw",
        doors: 4,
        seats: 5,
        lugguage: "2 Suitcases, 2 Bags",
        transmission: "Automatic",
        airConditioning: "Yes",
        minimumAge: 25,
        image: vehicle4,
      },
      car5: {
        price: 80.4,
        make: "Mercedes-Benz",
        model: "GLK",
        doors: 4,
        seats: 5,
        lugguage: "2 Suitcases, 2 Bags",
        transmission: "Automatic",
        airConditioning: "Yes",
        minimumAge: 25,
        image: vehicle5,
      },
      car6: {
        price: 75.4,
        make: "Volkswagen",
        model: "VW Passat CC",
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
}

export default new FleetModel();
