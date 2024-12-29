// Define a class to represent the form model
class FormModel {
  constructor() {
    // Define car types available for selection
    this.carTypes = [
      "VW Passat CC",
      "Mercedes-Benz GLK",
      "BMW 320 Modernline",
      "Toyota Camry",
      "Audi A1 S-Line",
      "WV Golf V11",
    ];
    // Define locations available for pick-up and drop-off
    this.locations = [
      "Santa Monica - 2102 Lincoln Blvd",
      "Los Angeles - 5711 W Century Blvd",
      "Las Vegas - 6401 Centennial Center Blvd",
    ];
    // Generate time slots dynamically
    this.timeSlots = this._generateTimeSlots();
  }

  // Method to generate time slots in 12-hour format
  _generateTimeSlots() {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const period = hour < 12 ? "AM" : "PM"; // Determine AM/PM period
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // Convert to 12-hour format
        const time = `${formattedHour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")} ${period}`;
        slots.push(time); // Add formatted time to slots array
      }
    }
    return slots; // Return the generated time slots
  }
}

// Export an instance of the FormModel class
export default new FormModel();
