let map;
const locations = {
  "new-york": { lat: 40.712776, lng: -74.005974 },
  "los-angeles": { lat: 34.052235, lng: -118.243683 },
  chicago: { lat: 41.878113, lng: -87.629799 },
  houston: { lat: 29.760427, lng: -95.369804 },
  phoenix: { lat: 33.448376, lng: -112.074036 },
};

function initMap() {
  // Initial map options
  map = new google.maps.Map(document.getElementById("map"), {
    center: locations["new-york"], // Default location
    zoom: 8,
  });

  // Add a marker to the default location
  new google.maps.Marker({
    position: locations["new-york"],
    map: map,
  });

  // Add event listener for dropdown selection change
  document
    .getElementById("locationSelect")
    .addEventListener("change", function () {
      const selectedLocation = locations[this.value];
      map.setCenter(selectedLocation);
      new google.maps.Marker({
        position: selectedLocation,
        map: map,
      });
    });
}

// Initialize the map when the window loads
window.onload = initMap;
