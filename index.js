var addNewButton = $('.add-new');
var buttonDiv = $('.parent');
var allButtons = $('.parent .button')

function showAlert() {
  alert('You clicked me!');
}

addNewButton.on('click', function () {
  var newButton = buttonDiv.append("<button class='button'>New click me button!</button>")
});

allButtons.on('click', showAlert)
