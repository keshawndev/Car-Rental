// Import the form view to render the form
import formView from "../views/formView.js";

// Function to control the form rendering
const controlForm = function () {
  formView.render();
};

// Initialize the form controller
const init = function () {
  controlForm();
};

// Call the init function to render the form on page load
init();
