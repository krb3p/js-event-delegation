
// helper function to trigger alert
function showAlert() {
  alert('You clicked me!');
}

//Go to the page, find special new button
var addNewButton = document.querySelector('.add-new');

//Go to the page, find the parent element of the buttons
var buttonDiv = document.querySelector('.parent');

// Add a new button to the page whenever the "Add a new button below." button
// is pressed.

// We refence the variable defined earlier which found our special new button on the page and assigned an event listener to trigger specifically on click that calls an anonymous function
addNewButton.addEventListener('click', function () {
  // assigning a var to the creation of a new dom node
  var newButton = document.createElement('button');
  // adding a class to our new dom node
  newButton.className = 'button';
  // Adding text content to the new dom node
  newButton.textContent = "New click me button!";
  // Spitting said dom node on to page
  buttonDiv.appendChild(newButton);
});

// Bind an event to all of the "Click me!" buttons that shows an alert.

//Go to the page, find all buttons within the parent div
var allButtons = document.querySelectorAll('.parent .button');

// For loop that iterates through the pre-defined variable that went out and found all the buttons on the page at page load
for(var i = 0; i < allButtons.length; i++){
  allButtons[i].addEventListener('click', showAlert);
}
