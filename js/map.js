///

let map;
let marker; // Variable to hold the current marker

function initMap() {
  // Initialize the map with a global view
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 20, lng: 0 }, // Center of the world
    zoom: 2,
  });

  // Add event listener for dropdown selection change
  document
    .querySelector(".locations__hover__box__flex__form__location-select")
    .addEventListener("change", function () {
      const address = this.value;
      if (address !== "Please select a location") {
        geocodeAddress(address);
      }
    });
}

function geocodeAddress(address) {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: address }, (results, status) => {
    if (status === "OK") {
      const location = results[0].geometry.location;
      map.setCenter(location);
      map.setZoom(12); // Zoom in to the selected location

      // Remove the previous marker if it exists
      if (marker) {
        marker.setMap(null);
      }

      // Add a new marker for the selected location
      marker = new google.maps.Marker({
        position: location,
        map: map,
      });
    } else {
      console.error(
        "Geocode was not successful for the following reason:",
        status
      );
    }
  });
}

// Initialize the map when the window loads
window.onload = initMap;
