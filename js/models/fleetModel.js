class FleetModel {
  constructor() {
    this.carModels = [
      "VW Golf VII",
      "Audi A1 S-LINE",
      "Toyota Camry",
      "BMW 320 ModernLine",
      "Mercedes-Benz GLK",
      "VW Passat CC",
    ];

    this.fleet = {
      "VW Golf VII": {
        price: 37.4,
        make: "Volkswagen",
        model: "VW Golf VII",
        doors: 4,
        seats: 5,
        lugguage: "2 Suitcases, 2 Bags",
        transmission: "Automatic",
        airConditioning: "Yes",
        minimumAge: 25,
        image: "img/Home/vehicle1.jpg",
      },
      "Audi A1 S-LINE": {
        price: 47.5,
        make: "Audi",
        model: "A1 S-LINE",
        doors: 4,
        seats: 5,
        lugguage: "2 Suitcases, 2 Bags",
        transmission: "Automatic",
        airConditioning: "Yes",
        minimumAge: 25,
        image: "img/Home/vehicle2.jpg",
      },
      "Toyota Camry": {
        price: 50.4,
        make: "Toyota",
        model: "Camry",
        doors: 4,
        seats: 5,
        lugguage: "2 Suitcases, 2 Bags",
        transmission: "Automatic",
        airConditioning: "Yes",
        minimumAge: 25,
        image: "img/Home/vehicle3.jpg",
      },
      "BMW 320 ModernLine": {
        price: 37.4,
        make: "BMW",
        model: "320 ModernLinw",
        doors: 4,
        seats: 5,
        lugguage: "2 Suitcases, 2 Bags",
        transmission: "Automatic",
        airConditioning: "Yes",
        minimumAge: 25,
        image: "img/Home/vehicle4.jpg",
      },
      "Mercedes-Benz GLK": {
        price: 80.4,
        make: "Mercedes-Benz",
        model: "GLK",
        doors: 4,
        seats: 5,
        lugguage: "2 Suitcases, 2 Bags",
        transmission: "Automatic",
        airConditioning: "Yes",
        minimumAge: 25,
        image: "img/Home/vehicle5.jpg",
      },
      "VW Passat CC": {
        price: 75.4,
        make: "Volkswagen",
        model: "VW Passat CC",
        doors: 4,
        seats: 5,
        lugguage: "2 Suitcases, 2 Bags",
        transmission: "Automatic",
        airConditioning: "Yes",
        minimumAge: 25,
        image: "img/Home/vehicle6.jpg",
      },
    };
  }

  getCarModels() {
    return this.carModels;
  }

  getFleet() {
    return this.fleet;
  }

  getCarModelDetails(carModel) {
    return this.fleet[carModel];
  }

  getCarModelImage(carModel) {
    return this.fleet[carModel].image;
  }

  getCarModelPrice(carModel) {
    return this.fleet[carModel].price;
  }

  getCarModelMake(carModel) {
    return this.fleet[carModel].make;
  }

  getCarModelModel(carModel) {
    return this.fleet[carModel].model;
  }

  getCarModelDoors(carModel) {
    return this.fleet[carModel].doors;
  }

  getCarModelSeats(carModel) {
    return this.fleet[carModel].seats;
  }

  getCarModelLugguage(carModel) {
    return this.fleet[carModel].lugguage;
  }

  getCarModelTransmission(carModel) {
    return this.fleet[carModel].transmission;
  }

  getCarModelAirConditioning(carModel) {
    return this.fleet[carModel].airConditioning;
  }

  getCarModelMinimumAge(carModel) {
    return this.fleet[carModel].minimumAge;
  }
}

export default new FleetModel();
