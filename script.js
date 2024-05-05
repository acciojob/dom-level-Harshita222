//your JS code here. If required.
// let itm = document.getelementById("level")
//  alert("The level of the element is: 4");
// script.js

// Function to determine the DOM level of an element
function getDOMLevel() {
  // Get the target element by its id
  const targetElement = document.getElementById('level');

  if (targetElement) {
    // Initialize the DOM level counter
    let domLevel = 0;

    // Traverse the parent elements until reaching the root html element
    let currentElement = targetElement;
    while (currentElement.parentNode) {
      currentElement = currentElement.parentNode;
      domLevel++;
    }

    // Display the DOM level using alert
    alert(`The level of the element is: ${domLevel}`);
  } else {
    // If the target element is not found, display an error message
    alert('Error: Element with id "level" not found.');
  }
}

// Call the function to determine the DOM level
getDOMLevel();
