var $addNewButton = $('.add-new');
var $postDiv = $('.post');
var $newForm = $('.new-form')

function showAlert() {
  alert('You clicked me!');
}

var form = "<form class='new-form'>Title: <input type='text' name='title'><br>Content: <input type='text' name='content'><br><input type='submit'></form>"

$addNewButton.on('click', function(event) {
  $postDiv.append(form)
});

$newForm.on('submit', function(event){
  event.preventDefault()
  var title = $(this).find("input[name='title']").val()
  var content = $(this).find("input[name='title']").val()
  $postDiv.append(postHTML(title, content))
  $('form').hide()
  hideForm()
})

function hideForm() {
  $('form').hide()
}

function postHTML(title, content) {
  return "<h1>" + title + "</h1><h3>" + content + "</h3>"
}