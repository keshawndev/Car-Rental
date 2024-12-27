class MapModel {
  constructor() {
    this.mapId = "map";
    this.location = [39.82838734509092, -98.57949157604952];
    this.zoom = 5;
    this.locationData = {
      location1: {
        name: "Santa Monica - 2102 Lincoln Blvd",
        coordinates: [34.019454, -118.491191],
      },
      location2: {
        name: "New York - 5th Avenue",
        coordinates: [40.712776, -74.005974],
      },
      location3: {
        name: "Los Angeles - 123 Main St",
        coordinates: [34.052235, -118.243683],
      },
      location4: {
        name: "Brooklyn - 456 Another St",
        coordinates: [40.681358177941775, -73.98126893184624],
      },
      location5: {
        name: "Orlando - 2125 W Landstreet Rd",
        coordinates: [28.436494434859064, -81.40728178997603],
      },
      location6: {
        name: "Washington - 50 Massachusetts Ave NE",
        coordinates: [38.89811486921348, -77.00623507425082],
      },
      location7: {
        name: "Denver - 7800 E Tufts Ave",
        coordinates: [39.63544436601984, -104.90066051909447],
      },
    };
  }

  getLocationData() {
    return this.locationData;
  }
}

export default new MapModel();
